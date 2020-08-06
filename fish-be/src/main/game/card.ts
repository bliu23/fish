import { Suit, Value } from './face';
import { ICard } from '../types/game/card';

// this file should handle card logic (and should be placed in the appropriate folder)
export class Card implements ICard {
  _suit: Suit;
  _value: Value;

  constructor(suit: Suit, value: Value) {
    this._suit = suit;
    this._value = value;
  }

  get suit(): Suit {
    return this._suit;
  }

  get value(): Value {
    return this._value;
  }

  equals(card1: Card, card2: Card): boolean {
    const suits = card1._suit === card2._suit;
    const values = card1._value === card2._value;

    return suits && values;
  }
}

// TODO: Suit and Value enums should not be declared here and pulled by both this class and this class' interface
