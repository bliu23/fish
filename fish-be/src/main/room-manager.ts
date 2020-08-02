import Constants from './constants';
import { Game } from './game/game';
import { PlayerName } from './types/player-name';
import { RoomId } from './types/room-id';

export class RoomManager {
  private _rooms: Map<RoomId, PlayerName[]>;
  constructor() {
    this._rooms = new Map();
  }

  get rooms(): Map<RoomId, PlayerName[]> {
    return this._rooms;
  }

  addPlayer(roomId: RoomId, player: PlayerName): boolean {
    const playersForRoom: PlayerName[] = this.getPlayers(roomId);

    if (this.isFull(roomId)) {
      return false;
    }
    this.rooms.set(roomId, playersForRoom.concat(player));

    return true;
  }

  getPlayers(roomId: RoomId): PlayerName[] {
    const playersForRoom: PlayerName[] | undefined = this.rooms.get(roomId);

    if (playersForRoom) {
      return playersForRoom;
    } else {
      return [];
    }
  }

  isFull(roomId: RoomId): boolean {
    return this.getPlayers(roomId).length === Constants.MAX_ROOM_SIZE;
  }

  startGame(roomId: RoomId): Game | undefined {
    if (this.isFull(roomId)) {
      return new Game(this.getPlayers(roomId));
    }
  }
}
