import { Suit, Value } from './face';
import { ICard } from '../types/game/card';

// this file should handle card logic (and should be placed in the appropriate folder)
<<<<<<< Updated upstream
export class Card implements ICard {
  _suit: Suit;
  _value: Value;
=======
<<<<<<< Updated upstream
class Card implements ICard {
=======
export class Card implements ICard {
>>>>>>> Stashed changes
  private _suit: Suit;
  private _value: Value;
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  matches(card: Card): boolean {
    const suits = this._suit === card._suit;
    const values = this._value === card._value;
=======
<<<<<<< Updated upstream
  equals(card1: Card, card2: Card): boolean {
    const suits = card1.suit === card2.suit;
    const values = card1.value === card2.value;
=======
  matches(card: Card): boolean {
    const suits = this.suit === card.suit;
    const values = this.value === card.value;
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    return suits && values;
  }
}
