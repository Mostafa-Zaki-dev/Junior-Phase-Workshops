import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// ACTION TYPES:

const ADD_GROCERY = 'ADD_GROCERY';
const TOGGLE_GROCERY = 'TOGGLE_GROCERY';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_BOUGHT = 'SHOW_BOUGHT';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

// ACTION CREATORS:

let nextId = 0;

export const addGrocery = (groceryName) => ({
  type: ADD_GROCERY,
  id: nextId++, // shouldn't it be pre-increment ++nextId ?
  text: groceryName,
});

export const toggleGrocery = (groceryId) => ({ type: TOGGLE_GROCERY, id: groceryId });

export const setVisibilityFilter = (visibilityFilter) => ({
  type: SET_VISIBILITY_FILTER,
  visibilityFilter,
});

// INITIAL STATE:

const initialState = { groceries: [], visibilityFilter: SHOW_ALL };

// REDUCER:

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let newGroceryItem = { id: action.id, text: action.text, bought: false };
      return { ...state, groceries: [...state.groceries, newGroceryItem] };
    case TOGGLE_GROCERY:
      const groceries = state.groceries.map((grocery) =>
        grocery.id === action.id ? { ...grocery, bought: !grocery.bought } : grocery
      );
      return { ...state, groceries };
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.visibilityFilter };
    default:
      return state;
  }
};

// STORE:

const store = createStore(reducer, applyMiddleware(logger));

export default store;
