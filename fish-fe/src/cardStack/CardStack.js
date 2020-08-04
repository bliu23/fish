import React from 'react';

import Card from '@heruka_urgyen/react-playing-cards/lib/TcB';

import crown from '../assets/crown.jpg';
import no from '../assets/no.jpg';
import yes from '../assets/yes.png';

import './CardStack.scss';

function CardStack(props) {
  const images = {
    guesser: crown,
    wrong: no,
    right: yes,
  };

  return (
    <div className="CardStack players">
      <img src={images[props.image]} className="indicator"></img>

      <div className="playerName">{props.player.name}</div>
      {props.player.hand.map((card) => (
        <Card card={card} back={!props.front} />
      ))}
    </div>
  );
}

export default CardStack;
