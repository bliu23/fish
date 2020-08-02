import { Game } from '../game/game';
import { PlayerName } from './player-name';
import { RoomId } from './room-id';

export interface IRoomManager {
  addPlayer(roomId: RoomId, player: PlayerName): boolean;
  getPlayers(roomId: RoomId): PlayerName[];
  isFull(roomId: RoomId): boolean;
  startGame(roomId: RoomId): Game | undefined;
}
