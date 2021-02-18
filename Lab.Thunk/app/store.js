import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'

const GOT_PETS_FROM_SERVER = 'GOT_PETS_FROM_SERVER'

// VVV your code here VVV

// ^^^ your code here ^^^

const initialState = {
  pets: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PETS_FROM_SERVER:
      return {...state, pets: action.pets}
    default:
      return state
  }
}

const middlewares = applyMiddleware(loggingMiddleware)
const store = createStore(reducer, middlewares)

export default store
