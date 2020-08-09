import React, { useState, useEffect } from 'react';
import Hand from '../hand/Hand';
import './Room.scss';
import CardStack from '../cardStack/CardStack';
import Player from '../player/Player';
import { socket, subscribeToMove } from '../socket';

function Room() {
  const mainPlayerNumber = 1;

  const [players, setPlayers] = useState({
    0: new Player(['2c'], 'Player1'),
    1: new Player(['2c', '3h', '5h', '6h', '4s', 'As', 'Ah'], 'Player2'),
    2: new Player(['2c', '5h'], 'Player3'),
    3: new Player(['2c', '5h', '2c', '5h'], 'Player4'),
    4: new Player(['2c', '5h'], 'Player5'),
    5: new Player(['2c', '5h'], 'Player6'),
  });

  useEffect(() => {
    function updatePlayerState(payload) {
      setPlayers((prevState) => ({
        ...prevState,
        [payload.targetPlayer]: new Player(
          prevState[payload.targetPlayer].handIfRemoved(payload.card),
          payload.targetPlayer,
        ),
        [payload.guessingPlayer]: new Player(
          prevState[payload.guessingPlayer].handIfAdded(payload.card),
          payload.guessingPlayer,
        ),
      }));
    }

    subscribeToMove((err, payload) => {
      if (err) {
        return;
      }
      updatePlayerState(payload);
    });
  }, []);

  // Last played (last turn?) can be represented like a player
  const [lastPlayed, setLastPlayed] = useState(
    new Player(['2c'], 'Previous Turn'),
  );

  /**
   * Helper function that re-arranges the main player's hand
   * @param {string[]} hand
   */
  const rearrangePlayerHand = (hand) => {
    const playerWithRearrangedHand = new Player(hand, mainPlayerNumber);
    setPlayers((prevState) => ({
      ...prevState,
      [mainPlayerNumber]: playerWithRearrangedHand,
    }));
  };

  /**
   * These are the actions:
   * 1. This player is guessing, and it tells the server "I (player X) is going to guess A card from player Y"
   * 2. Server will respond with:
   *  1. Whose turn it is
   *  2. Remove card from who? Technically for other players you only need to know # of cards, but it's ok to keep track of the cards anyways
   *  3. Add card to who?
   */

  return (
    <div className="Room">
      <button
        onClick={() => {
          // updateCards('3h', 2, 1);
        }}
      ></button>
      <div className="top-bottom-row">
        <div className="filler"></div>
        <div className="players">
          <CardStack player={players[0]} image="guesser" />
        </div>
        <div className="players">
          <CardStack player={players[1]} image="wrong" />
        </div>
        <div className="filler"></div>
      </div>
      <div className="middle-row">
        <div className="middle-row-left">
          <div className="players">
            <CardStack player={players[2]} front={true} image="right" />
          </div>
        </div>
        <div className="middle-row-center">
          <div className="players">
            <CardStack player={lastPlayed} front={true} />
          </div>
        </div>
        <div className="middle-row-right">
          <div className="players">
            <CardStack player={players[3]} />
          </div>
        </div>
      </div>
      <div className="top-bottom-row">
        <div className="filler"></div>
        <div className="players">
          <CardStack player={players[4]} />
        </div>
        <div className="players">
          <CardStack player={players[5]} />
        </div>
        <div className="filler"></div>
      </div>
      <div id="container">
        <Hand
          cards={players[mainPlayerNumber].hand}
          setPlayerHand={rearrangePlayerHand}
        />
      </div>
    </div>
  );
}

export default Room;
