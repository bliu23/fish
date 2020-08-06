// TODO: ensure imports are correct
import { Suit, Value } from './face';
import { Card } from './card';
import { IDeck } from '../types/game/deck';

// this file should handle deck logic (and should be placed in the appropriate folder)
export class Deck implements IDeck {
  private _cards: Card[] = [];

  constructor() {
    for (const suit in Suit) {
      const cardSuit: Suit = (Suit[suit] as any) as Suit;
      for (const value in Value) {
        const cardValue: Value = (Value[value] as any) as Value;
        const card = new Card(cardSuit, cardValue);
        this._cards.push(card);
      }
    }
    this.shuffle();
  }

  // fischer-yates shuffle
  private shuffle(): void {
    let currentIndex = this._cards.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this._cards[currentIndex];
      this._cards[currentIndex] = this._cards[randomIndex];
      this._cards[randomIndex] = temporaryValue;
    }
  }

  // Draw top card of the deck
  draw(): Card {
    if (this._cards.length === 0) {
      console.log('drawing from empty deck');
    }

    // dirty way to work around pop returning Card | undefined
    return (this._cards.pop() as any) as Card;
  }
}
