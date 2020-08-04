import React, { useState } from 'react';
import Hand from '../hand/Hand';
import './Room.scss';
import CardStack from '../cardStack/CardStack';

function Room() {
  const players = [
    {
      hand: ['2c'],
      name: 'Player1',
    },
    {
      hand: ['2c', '5h', '6h', '5h', '6h', '5h', '6h'],
      name: 'Player2',
    },
    {
      hand: ['2c', '5h'],
      name: 'Player3',
    },
    {
      hand: ['2c', '5h', '2c', '5h'],
      name: 'Player4',
    },
    {
      hand: ['2c', '5h'],
      name: 'Player5',
    },
    {
      hand: ['2c', '5h'],
      name: 'Player6',
    },
  ];

  const [playerHand, setPlayerHand] = useState([
    '2c',
    '3h',
    '5h',
    '6h',
    '4s',
    'As',
    'Ah',
  ]);

  const lastPlayed = {
    hand: ['2c'],
    name: 'Last played',
  };

  return (
    <div className="Room">
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
            <CardStack player={players[2]} image="right" />
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
        <Hand cards={playerHand} setPlayerHand={setPlayerHand} />
      </div>
    </div>
  );
}

export default Room;
