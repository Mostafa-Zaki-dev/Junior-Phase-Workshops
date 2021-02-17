import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// ACTION TYPES:

const ADD_GROCERY = 'ADD_GROCERY';
const TOGGLE_GROCERY = 'TOGGLE_GROCERY';

// ACTION CREATORS:

let nextId = 0;

export const addGrocery = (groceryName) => ({
  type: ADD_GROCERY,
  id: nextId++, // shouldn't it be pre-increment ++nextId ?
  text: groceryName,
});

export const toggleGrocery = (groceryId) => ({ type: TOGGLE_GROCERY, id: groceryId });

// INITIAL STATE:

const initialState = { groceries: [] };

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
    default:
      return state;
  }
};

// STORE:

const store = createStore(reducer, applyMiddleware(logger));

export default store;
