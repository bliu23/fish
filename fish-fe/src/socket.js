import io from 'socket.io-client';
const server = 'http://localhost:3001';

export const socket = io(server);

// A player made a successful guess
// A player made an unsuccessful guess
export const subscribeToCorrectGuess = (cb) => {
  subscribeToEvent('move', cb);
};

export const subscribeToIncorrectGuess = (cb) => {
  subscribeToEvent('incorrect', cb);
};

export const subscribeToNewGame = (cb) => {
  subscribeToEvent('newGame', cb);
};

export const subscribeToSet = (cb) => {
  subscribeToEvent('set', cb);
};

const subscribeToEvent = (event, cb) => {
  if (!socket) {
    return true;
  }

  socket.on(event, (payload) => {
    return cb(null, payload);
  });
};
