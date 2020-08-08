import io from 'socket.io-client';
const server = 'http://localhost:3001';

export const socket = io(server);

export const subscribeToMove = (cb) => {
  if (!socket) {
    return true;
  }

  socket.on('move', (payload) => {
    return cb(null, payload);
  });
};
