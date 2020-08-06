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

  matches(card: Card): boolean {
    const suits = this._suit === card._suit;
    const values = this._value === card._value;

    return suits && values;
  }
}
