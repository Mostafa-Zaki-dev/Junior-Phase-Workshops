// We'll dive deeper into middleware later.
// For now, it's enough to know that this loggerMiddleware prints out useful
// information about everything that happens in your store.
// Much like requests in express pass from middleware to middleware, actions in redux
// pass from middleware to middleware. The loggerMiddleware gets a chance to see
// actions before they are processed. They get in the middle, hence, middleware.
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

// We'll soon revisit the initial state of this application.
const initialState = {
  grid: [Array(20).fill('')],
};

// ACTION TYPES

const ADD_ROW = 'ADD_ROW';

// ACTION CREATORS

export const addRow = () => ({ type: ADD_ROW });

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      const numCols = state.grid[0].length;
      const newRow = Array(numCols).fill('');
      // by using the spread operator, we return a *new* object, not a mutated one
      return { ...state, grid: [...state.grid, newRow] };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
