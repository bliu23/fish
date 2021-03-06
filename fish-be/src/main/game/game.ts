import { Deck } from './deck';
import { IGame } from '../types/game';
import { Player } from './player';

// this file should handle game (and should be placed in the appropriate folder)
export class Game implements IGame {
  players: Player[];
  deck: Deck;

  // playerTurn: Player;

  constructor(playerNames: string[]) {
    this.players = playerNames.map((name) => new Player(name));
    this.deck = new Deck();
    this.deck.shuffle();
  }

  playCard(): void {
    this.deck.draw();
  }

  playGame(): void {
    const numPlayers = this.players.length;
    let robber = 0;
    while (true) {
      robber = robber % numPlayers;
      robber++;
    }
  }
}
