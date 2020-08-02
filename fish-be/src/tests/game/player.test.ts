import * as chai from 'chai';
import { ISuit, IValue } from '../../main/types/game/card';
import { Card } from '../../main/game/card';

const expect = chai.expect;

describe('Player', () => {
  describe('addCard', () => {
    it('add a card to player hand', () => {
      const suit = ISuit.Club;
      const value = IValue.Ace;
      const card = new Card(ISuit.Club, IValue.Ace);
      expect(card.suit).to.equal(suit);
      expect(card.value).to.equal(value);
    });
  });
});
