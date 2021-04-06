import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import socket from './socket';

// Action types

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';
const USER_NAME = 'USER_NAME';

// Action creators

export const gotMessagesFromServer = (messages) => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages,
});

export const gotNewMessagesFromServer = (message) => ({
  type: GOT_NEW_MESSAGE_FROM_SERVER,
  message,
});

export const writeMessage = (inputcontent) => ({
  type: WRITE_MESSAGE,
  newMessageEntry: inputcontent,
});

export const userSet = (user) => ({
  type: USER_SET,
  user,
});

// Thunk creators

export const fetchMessages = () => async (dispatch) => {
  const { data } = await axios.get('/api/messages');
  dispatch(gotMessagesFromServer(data));
};

export const postMessage = (message) => async (dispatch) => {
  const { data } = await axios.post('/api/messages', message);
  dispatch(gotNewMessagesFromServer(data));
  socket.emit('new-message', data);
};
// Initial state

const intialState = {
  messages: [],
  newMessageEntry: '',
  user: '',
};

// Reducer

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return { ...state, messages: action.messages };
    case WRITE_MESSAGE:
      return { ...state, newMessageEntry: action.newMessageEntry };
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return { ...state, messages: [...state.messages, action.message] };
    case USER_NAME:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

//

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
