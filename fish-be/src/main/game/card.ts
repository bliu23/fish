import { ICard, ISuit, IValue } from '../types/game/card';

// this file should handle card logic (and should be placed in the appropriate folder)
export class Card implements ICard {
  private _suit: ISuit;
  private _value: IValue;

  constructor(suit: ISuit, value: IValue) {
    this._suit = suit;
    this._value = value;
  }

  get suit(): ISuit {
    return this._suit;
  }

  get value(): IValue {
    return this._value;
  }

  equals(card1: Card, card2: Card): boolean {
    var suits = card1.suit == card2.suit;
    var values = card1.value == card2.value;
    return suits && values;
  }
}
