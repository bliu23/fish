import { Suit, Value } from '../../game/face';

export interface ICard {
  _suit: Suit;
  _value: Value;
  equals(card1: ICard, card2: ICard): boolean;
}
