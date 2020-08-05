import { ICard } from '../types/game/card';

// this file should handle card logic (and should be placed in the appropriate folder)
class Card implements ICard {
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

  equals(card1: Card, card2: Card): boolean {
    const suits = card1.suit === card2.suit;
    const values = card1.value === card2.value;

    return suits && values;
  }
}

// TODO: Suit and Value enums should not be declared here and pulled by both this class and this class' interface
enum Suit {
  Club,
  Diamond,
  Heart,
  Spade,
}

// Card values. Seven is exempt because it does not exist in this game
enum Value {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

export { Card, Suit, Value };
