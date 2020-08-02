import { RoomManager } from '../main/room-manager';

import * as chai from 'chai';
import Constants from '../main/constants';
import { Game } from '../main/game';

const expect = chai.expect;

// TODO: Let's add some "before" and cleanup actions?
describe('RoomManager', () => {
  describe('addPlayer', () => {
    it('should add a player', () => {
      const roomId = 'roomId';
      const player = 'player1';
      const roomManager = new RoomManager();
      roomManager.addPlayer(roomId, player);
      const map = roomManager.rooms;

      expect(map.has(roomId)).to.be.true;
      expect(map.get(roomId)?.length).to.equal(1);
      expect(map.get(roomId)).to.deep.equal([player]);
    });
    it('should not add a player past the max size', () => {
      const roomManager = new RoomManager();
      const roomId = 'roomId';
      for (let i = 0; i < Constants.MAX_ROOM_SIZE; i++) {
        roomManager.addPlayer(roomId, i.toString());
      }

      const actual = roomManager.addPlayer(roomId, '7');
      expect(actual).to.equal(false);
    });
  });

  describe('getPlayers', () => {
    it('should return an empty array if there are no players for roomId', () => {
      const roomManager = new RoomManager();
      const roomId = 'roomId';
      const actual = roomManager.getPlayers(roomId);
      expect(actual).to.deep.equal([]);
    });

    it('should return array of players for roomId', () => {
      const roomManager = new RoomManager();
      const roomId = 'roomId';
      roomManager.addPlayer(roomId, '1');
      const actual = roomManager.getPlayers(roomId);
      expect(actual).to.deep.equal(['1']);
    });
  });

  describe('isFull', () => {
    it('should return true if room is at max room size', () => {
      const roomManager = new RoomManager();
      const roomId = 'roomId';
      for (let i = 0; i < Constants.MAX_ROOM_SIZE; i++) {
        const actual = roomManager.isFull('roomId');
        expect(actual).to.equal(false);
        roomManager.addPlayer(roomId, i.toString());
      }
      const actual = roomManager.isFull('roomId');
      expect(actual).to.equal(true);
    });

    it('should return false if room is not at max room size', () => {
      const roomManager = new RoomManager();
      const actual = roomManager.isFull('roomId');
      expect(actual).to.equal(false);
    });
  });

  describe('startGame', () => {
    it('should start a game if room is full', () => {
      const roomManager = new RoomManager();
      const roomId = 'roomId';
      for (let i = 0; i < Constants.MAX_ROOM_SIZE; i++) {
        roomManager.addPlayer(roomId, i.toString());
      }
      const actual = roomManager.startGame('roomId');
      expect(actual).to.be.a.instanceof(Game);
    });

    it('should not start a game if room is not full', () => {
      const roomManager = new RoomManager();
      const actual = roomManager.startGame('roomId');
      expect(actual).to.be.undefined;
    });
  });
});
