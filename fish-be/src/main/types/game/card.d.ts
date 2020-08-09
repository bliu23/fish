import { Suit, Value } from '../../game/card';
import { Card } from '../../game/card';

export interface ICard {
  matches(card: Card): boolean;

}
