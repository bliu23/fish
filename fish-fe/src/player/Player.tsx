import { PlayerStatus } from './PlayerStatus';

export default class Player {
  private _hand: string[];
  private _name: string;
  private _status: PlayerStatus;

  constructor(
    hand: string[],
    name: string,
    status: PlayerStatus = PlayerStatus.NORMAL,
  ) {
    this._hand = hand;
    this._name = name;
    this._status = status;
  }

  handIfAdded(card: string): string[] {
    return this.hand.concat(card);
  }

  handIfRemoved(card: string): string[] {
    const index = this.hand.indexOf(card);
    if (index > -1) {
      return this.hand.slice(0, index).concat(this.hand.slice(index + 1));
    }
    return this.hand;
  }

  clearedStatus(): Player {
    return new Player(this.hand, this.name, PlayerStatus.NORMAL);
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get hand(): string[] {
    return this._hand;
  }

  set hand(hand: string[]) {
    this._hand = hand;
  }

  get status(): PlayerStatus {
    return this._status;
  }

  set status(status: PlayerStatus) {
    this._status = status;
  }
}
