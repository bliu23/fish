import { IGame } from './types/game';

// this file should handle game (and should be placed in the appropriate folder)
export class Game implements IGame {
  players: string[];

  constructor(players: string[]) {
    this.players = players;
  }

  playCard(): void {
    console.log('playing...');
  }
}
