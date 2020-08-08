import * as chai from 'chai';
import * as lodash from 'lodash';
import { Suit, Value } from '../../main/game/face';
import { Card } from '../../main/game/card';
import { Deck } from '../../main/game/deck';

const expect = chai.expect;

function compareDeck(deck1: Deck, deck2: Deck): boolean {
  if (deck1.length !== deck2.length) {
    return false;
  }
  for (let i = 0; i < deck1.length; i++) {
    const card1 = deck1.draw();
    const card2 = deck2.draw();

    if (!card1.matches(card2)) {
      return false;
    }
  }

  return true;
}

describe('Deck', () => {
  const deck = new Deck();
  it('should initalize a deck with values', () => {
    expect(deck.length).to.equal(48);
  });

  const top = deck.draw();
  it('should draw the top card', () => {
    expect(top.matches(new Card(Suit.Club, Value.Ace)));
  });

  const shuffle = lodash.cloneDeep(deck);
  shuffle.shuffle();
  it('should shuffle', () => {
    expect(compareDeck(deck, shuffle)).to.equal(false);
  });
});
