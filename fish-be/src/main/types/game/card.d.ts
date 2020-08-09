import { Card } from '../../game/card';

export interface ICard {
  matches(card: Card): boolean;
}
