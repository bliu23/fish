import { Card } from './card';
import { IPlayer } from '../types/game/player';
import { PlayerName } from '../types/player-name';

// this file should handle player logic (and should be placed in the appropriate folder)
export class Player implements IPlayer {
  private _name: PlayerName;
  private _hand: Card[];

  constructor(name: PlayerName, hand: Card[] = []) {
    this._name = name;
    this._hand = hand;
  }

  get hand(): Card[] {
    return this._hand;
  }

  get name(): PlayerName {
    return this._name;
  }

  // TODO: Consider failure modes? Like if cards exist, don't exist, invalid, etc
  addCard(card: Card): boolean {
    this._hand.push(card);

    return true;
  }

  hasCard(card: Card): boolean {
    for (const c of this._hand) {
      if (c.matches(card)) {
        return true;
      }
    }

    return false;
  }

  stealCardFrom(player: Player, card: Card): boolean {
    // ensure player can steal from the halfsuit
    let halfSuit = false;
    for (const c of this._hand) {
      if (c.isSameHalfSuit(card)) {
        halfSuit = true;
      }
    }
    console.log('halfsuit');

    if (!halfSuit) return false;

    // check if card exist in other player's hand
    if (player.hasCard(card)) {
      const card1 = player.removeCard(card);
      this.addCard(card1);

      return true;
    }

    return false;
  }

  // requires card be in player's hand
  removeCard(card: Card): Card {
    for (let i = 0; i < this._hand.length; i++) {
      const c: Card = this._hand[i];

      if (c.matches(card)) {
        return this._hand.splice(i, 1)[0];
      }
    }

    return card;
  }
}
