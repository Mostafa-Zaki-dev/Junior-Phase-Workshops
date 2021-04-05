import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
// Action types

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

// Action creators

export const gotMessagesFromServer = (messages) => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages,
});

// Thunk creators

export const fetchMessages = () => async (dispatch) => {
  const { data } = await axios.get('/api/messages');
  dispatch(gotMessagesFromServer(data));
};

// Initial state

const intialState = {
  messages: [],
  newMessageEntry: '',
};

// Reducer

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};

//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
