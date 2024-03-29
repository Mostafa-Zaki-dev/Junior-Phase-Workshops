import io from 'socket.io-client';
import store, { gotNewMessagesFromServer } from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');
  socket.on('new-message', (message) => {
    store.dispatch(gotNewMessagesFromServer(message));
  });
});

export default socket;
