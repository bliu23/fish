import * as chai from 'chai';
import * as lodash from 'lodash';
import { Suit, Value } from '../../main/game/face';
import { Card } from '../../main/game/card';
import { Player } from '../../main/game/player';

//import { Deck } from '../../main/game/deck';

const expect = chai.expect;

describe('Player', () => {
  it('should initalize with an empty hand', () => {
    const player = new Player('John Doe', []);
    expect(player.hand.length).to.equal(0);
  });

  it('should test addCard', () => {
    const player = new Player('John Doe', []);

    const card = new Card(Suit.Club, Value.Ace);
    const card1 = lodash.cloneDeep(card);

    player.addCard(card);
    expect(player.hasCard(card1)).to.be.true;
  });

  it('should test hasCard', () => {
    const player = new Player('John Doe', []);

    const card1a = new Card(Suit.Club, Value.Ace);
    const card1b = lodash.cloneDeep(card1a);

    const card2a = new Card(Suit.Diamond, Value.Ace);
    const card2b = lodash.cloneDeep(card2a);

    player.addCard(card1a);
    expect(player.hasCard(card1b)).to.be.true;
    expect(player.hasCard(card2b)).to.be.false;

    player.addCard(card2a);
    expect(player.hasCard(card1b)).to.be.true;
    expect(player.hasCard(card2b)).to.be.true;
  });

  it('should test removeCard', () => {
    const player = new Player('John Doe', []);

    const card1a = new Card(Suit.Club, Value.Ace);
    const card1b = lodash.cloneDeep(card1a);

    const card2a = new Card(Suit.Diamond, Value.Ace);
    const card2b = lodash.cloneDeep(card2a);

    player.addCard(card1a);
    expect(player.hasCard(card1b)).to.be.true;
    expect(player.hasCard(card2b)).to.be.false;

    player.addCard(card2a);
    expect(player.hasCard(card1b)).to.be.true;
    expect(player.hasCard(card2b)).to.be.true;

    player.removeCard(card1a);
    expect(player.hasCard(card1b)).to.be.false;
    expect(player.hasCard(card2b)).to.be.true;

    player.removeCard(card2a);
    expect(player.hasCard(card1b)).to.be.false;
    expect(player.hasCard(card2b)).to.be.false;
  });
});
