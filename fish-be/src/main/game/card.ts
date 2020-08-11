import { Suit, Value } from './face';
import { ICard } from '../types/game/card';

// this file should handle card logic (and should be placed in the appropriate folder)
export class Card implements ICard {
  private _suit: Suit;
  private _value: Value;

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
    const suits = this.suit === card.suit;
    const values = this.value === card.value;

    return suits && values;
  }

  isSameHalfSuit(card: Card): boolean {
    const suits = this.suit === card.suit;
    const thisHalf = Math.floor(this.value / 6);
    const cardHalf = Math.floor(card.value / 6);
    const values = thisHalf === cardHalf;

    return suits && values;
  }
}
