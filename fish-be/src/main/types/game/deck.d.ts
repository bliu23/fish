import { Card } from '../../game/card';

export interface Deck {
  shuffle(): Deck;
  draw(): Card;
  // deal(players: Player[])...? or let the game do the dealing
}
