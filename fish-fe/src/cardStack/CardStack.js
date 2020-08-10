import React from 'react';

import Card from '@heruka_urgyen/react-playing-cards/lib/TcB';

import crown from '../assets/crown.jpg';
import no from '../assets/no.jpg';
import yes from '../assets/yes.png';

import './CardStack.scss';
import { PlayerStatus } from '../player/PlayerStatus';

function CardStack(props) {
  const images = {
    [PlayerStatus.GUESSING]: crown,
    [PlayerStatus.TARGET_WRONG]: no,
    [PlayerStatus.TARGET_RIGHT]: yes,
    [PlayerStatus.NORMAL]: undefined,
  };

  return (
    <div className="CardStack players">
      <img src={images[props.player.status]} className="indicator" alt=""></img>

      <div className="playerName">{props.player.name}</div>
      {props.player.hand.map((card) => (
        <Card card={card} back={!props.front} />
      ))}
    </div>
  );
}

export default CardStack;
