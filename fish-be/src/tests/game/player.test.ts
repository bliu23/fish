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

    const card1c = player.removeCard(card1a);
    expect(card1c.matches(card1b)).to.be.true;
    expect(player.hasCard(card1b)).to.be.false;
    expect(player.hasCard(card2b)).to.be.true;

    const card2c = player.removeCard(card2a);
    expect(card2c.matches(card2b)).to.be.true;
    expect(player.hasCard(card1b)).to.be.false;
    expect(player.hasCard(card2b)).to.be.false;
  });

  it('should return true if stealCard steals a valid card', () => {
    // player2 steals a card from player1
    const player1 = new Player('player1', []);
    const player2 = new Player('player2', []);

    const card1 = new Card(Suit.Club, Value.Ace);
    const card2 = lodash.cloneDeep(card1);
    const card3 = new Card(Suit.Club, Value.Two);

    player1.addCard(card1);
    player2.addCard(card3);

    expect(player2.hasCard(card2)).to.be.false;
    expect(player2.stealCardFrom(player1, card2)).to.be.true;
    expect(player1.hasCard(card2)).to.be.false;
    expect(player2.hasCard(card2)).to.be.true;
  });

  it('should test stealCard working properly if the card does not exist in target hand', () => {
    //
    const player1 = new Player('player1', []);
    const player2 = new Player('player2', []);

    const card1 = new Card(Suit.Club, Value.Ace);
    const card1a = lodash.cloneDeep(card1);
    const card2 = new Card(Suit.Diamond, Value.Ace);
    const card2a = lodash.cloneDeep(card2);

    player1.addCard(card1);
    expect(player2.hasCard(card1a)).to.be.false;

    player2.stealCardFrom(player1, card2);
    expect(player1.hasCard(card1a)).to.be.true;
    expect(player2.hasCard(card1a)).to.be.false;
    expect(player1.hasCard(card2a)).to.be.false;
    expect(player2.hasCard(card2a)).to.be.false;
  });
});
