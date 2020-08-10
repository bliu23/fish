import * as express from 'express';
import * as http from 'http';
import * as io from 'socket.io';
import { RoomId } from './types/room-id';
import { RoomManager } from './room-manager';

const app = express();
const server = http.createServer(app);
const PORT: number = 3001;

const sio = io(server);

const roomManager = new RoomManager();

app.get('/', (req, res) => {
  res.send('Test');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// Socket manager
sio.on('connection', (socket: io.Socket) => {
  socket.on(
    'testCommand',
    (card: string, guessingPlayer: number, targetPlayer: number) => {
      sio.sockets.emit('move', card, guessingPlayer, targetPlayer);
    },
  );

  socket.on(
    'testIncorrect',
    (card: string, guessingPlayer: number, targetPlayer: number) => {
      sio.sockets.emit('incorrect', card, guessingPlayer, targetPlayer);
    },
  );

  // Sample breaking down by room, probably player as well?
  socket.on('joinRoom', (roomId: RoomId) => {
    if (roomManager.isFull(roomId)) {
    } else {
      roomManager.addPlayer(roomId, socket.id);
      socket.join(`${roomId}`);
    }

    sio.sockets
      .in(`${roomId}`)
      .emit('connectToRoom', roomManager.getPlayers(roomId).length);
  });

  socket.on('testThing', () => {
    sio.sockets.emit('room', 'hello world');
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
