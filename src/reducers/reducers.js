import { RECEIVE_CONFIRMATION } from '../actions/actions.js';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const confirmation = (state = { data: null }, action) => {
  switch (action.type) {
    case RECEIVE_CONFIRMATION:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
};

const appReducer = combineReducers({
  confirmation
});

const store = createStore(
  appReducer,
  applyMiddleware(logger)
);

export default store;