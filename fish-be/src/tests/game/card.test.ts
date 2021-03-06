import * as chai from 'chai';
import { Suit, Value } from '../../main/game/face';
import { Card } from '../../main/game/card';

const expect = chai.expect;

describe('Card', () => {
  it('should initialize a card with values', () => {
    const suit = Suit.Club;
    const value = Value.Ace;
    const card1 = new Card(Suit.Club, Value.Ace);
    expect(card1.suit).to.equal(suit);
    expect(card1.value).to.equal(value);
  });

  it('should return true if two cards match', () => {
    const card1 = new Card(Suit.Club, Value.Ace);
    const card2 = new Card(Suit.Club, Value.Ace);
    expect(card1.matches(card2)).to.be.true;
  });

  it('return false if card suits do not match', () => {
    const card1 = new Card(Suit.Club, Value.Ace);
    const card2 = new Card(Suit.Spade, Value.Ace);
    expect(card1.matches(card2)).to.be.false;
  });

  it('return false if card values do not match', () => {
    const card1 = new Card(Suit.Club, Value.Ace);
    const card2 = new Card(Suit.Club, Value.King);
    expect(card1.matches(card2)).to.be.false;
  });
});
