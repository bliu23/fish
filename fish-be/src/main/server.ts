import * as express from 'express';
import * as http from 'http';
import * as io from 'socket.io';
// import { Game } from './game';
import { RoomId } from './types/room-id';
import { RoomManager } from './room-manager';
// import { Game } from './game';
// import { RoomManager } from './room-manager';

const app = express();
const server = http.createServer(app);
const PORT: number = 3001;

const sio = io(server);

// const rooms: Map<RoomId, RoomManager> = new Map();
// For now, store games in memory. Later down the line, we can have a stateless server
// const games: Map<RoomId, Game> = new Map();

const roomManager = new RoomManager();

app.get('/', (req, res) => {
  res.send('Test');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

sio.on('connection', (socket: io.Socket) => {
  // Sample breaking down by room, probably player as well?
  socket.on('joinRoom', (roomId: RoomId) => {
    console.log('join room');

    if (roomManager.isFull(roomId)) {
      console.log('is fill...');
    } else {
      roomManager.addPlayer(roomId, socket.id);
      socket.join(`${roomId}`);
    }

    sio.sockets
      .in(`${roomId}`)
      .emit('connectToRoom', roomManager.getPlayers(roomId).length);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
