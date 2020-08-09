import { Card } from '../../game/card';

export interface IPlayer {
  addCard(card: Card): boolean;
  hasCard(card: Card): boolean;
  removeCard(): boolean;
}
