export default class Player {
  private _hand: string[];
  private _name: string;
  private _isGuessing: boolean;

  constructor(hand: string[], name: string) {
    this._hand = hand;
    this._name = name;
    this._isGuessing = false;
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

  get isGuessing(): boolean {
    return this._isGuessing;
  }

  set isGuessing(isGuessing: boolean) {
    this._isGuessing = isGuessing;
  }
}
