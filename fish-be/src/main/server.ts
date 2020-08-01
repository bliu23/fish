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

sio.on('connection', (socket: io.Socket) => {
  console.log('Connection established');

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
