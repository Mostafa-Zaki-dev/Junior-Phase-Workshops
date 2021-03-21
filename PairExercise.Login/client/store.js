import axios from 'axios';
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

//thunk creators:

export const login = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put('/auth/login', formData);
      dispatch(gotUser(data));
    } catch (error) {
      console.log('Thunk login Error: ', error.message);
    }
  };
};

export const getMe = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/auth/me');
    dispatch(gotUser(data));
  } catch (error) {
    console.log('Thunk getMe Error: ', error.message);
  }
};

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
