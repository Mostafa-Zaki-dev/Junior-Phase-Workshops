import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// action types

const GET_USER = 'GET_USER';

//action creators:

export const gotUser = (user) => ({
  type: GET_USER,
  user,
});

//initial state

const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));