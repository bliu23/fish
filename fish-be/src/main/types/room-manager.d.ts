import { Game } from '../game';
import { Player } from './player';
import { RoomId } from './room-id';

export interface IRoomManager {
  addPlayer(roomId: RoomId, player: Player): boolean;
  getPlayers(roomId: RoomId): Player[];
  isFull(roomId: RoomId): boolean;
  startGame(roomId: RoomId): Game | undefined;
}
