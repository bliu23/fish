import * as express from 'express';
import * as http from 'http';
import * as io from 'socket.io';

const app = express();
const server = http.createServer(app);
const PORT: number = 3001;

const sio = io(server);

app.get('/', (req, res) => {
  res.send('Test');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const rooms: number[] = [];

sio.on('connection', (socket: io.Socket) => {
  // Sample breaking down by room
  socket.on('room', (roomNumber) => {
    rooms[roomNumber] ? rooms[roomNumber]++ : (rooms[roomNumber] = 1);
    socket.join(`${roomNumber}`);

    console.log(`${rooms[roomNumber]} players in `);

    sio.sockets.in(`${roomNumber}`).emit('connectToRoom', rooms[roomNumber]);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
