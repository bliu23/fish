import { Game } from './game';
import { Player } from './types/player';
import { RoomId } from './types/room-id';
import Constants from './constants';

export class RoomManager {
  private _rooms: Map<RoomId, Player[]>;
  constructor() {
    this._rooms = new Map();
  }

  get rooms(): Map<RoomId, Player[]> {
    return this._rooms;
  }

  addPlayer(roomId: RoomId, player: Player): boolean {
    const playersForRoom: Player[] = this.getPlayers(roomId);

    if (this.isFull(roomId)) {
      return false;
    }
    this.rooms.set(roomId, playersForRoom.concat(player));

    return true;
  }

  getPlayers(roomId: RoomId): Player[] {
    const playersForRoom: Player[] | undefined = this.rooms.get(roomId);

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
