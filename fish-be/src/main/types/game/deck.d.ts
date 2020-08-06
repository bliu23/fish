import { Card } from '../../game/card';

export interface IDeck {
  draw(): Card;
  // deal(players: Player[])...? or let the game do the dealing
}
