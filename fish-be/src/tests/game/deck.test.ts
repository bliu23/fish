import * as chai from 'chai';
import * as lodash from 'lodash';
import { Suit, Value } from '../../main/game/face';
import { Card } from '../../main/game/card';
import { Deck } from '../../main/game/deck';

const expect = chai.expect;

describe('Deck', () => {
  it('should initalize a deck with values', () => {
    const deck = new Deck();
    expect(deck.length).to.equal(48);
  });

  it('should draw the top card', () => {
    const deck = new Deck();
    const top = deck.draw();
    expect(top.matches(new Card(Suit.Club, Value.Ace)));
  });

  it('should shuffle', () => {
    const deck = new Deck();
    const shuffle = lodash.cloneDeep(deck);
    shuffle.shuffle();
    expect(deck.compareDeck(shuffle)).to.equal(false);
  });
});
