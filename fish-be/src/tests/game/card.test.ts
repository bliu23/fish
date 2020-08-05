import * as chai from 'chai';
import { Card, Suit, Value } from '../../main/game/card';

const expect = chai.expect;

describe('Card', () => {
  it('should initialize a card with values', () => {
    const suit = Suit.Club;
    const value = Value.Ace;
    const card = new Card(Suit.Club, Value.Ace);
    expect(card.suit).to.equal(suit);
    expect(card.value).to.equal(value);
  });
});
