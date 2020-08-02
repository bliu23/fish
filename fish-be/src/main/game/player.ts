import { Card } from './card';
import { PlayerName } from '../types/player-name';

// this file should handle player logic (and should be placed in the appropriate folder)
export class Player {
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

  // todo: maybe needs some comparison operator
  hasCard(card: Card): boolean {
    return true;
  }

  removeCard(): boolean {
    return true;
  }
}
