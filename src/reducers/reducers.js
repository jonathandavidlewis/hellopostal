import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {
  CHANGE_FORM_FIELD,
  RECEIVE_CONFIRMATION
} from '../actions/actions.js';

const confirmation = (state = { status: null, data: null }, action) => {
  switch (action.type) {
    case RECEIVE_CONFIRMATION:
      return {
        ...state,
        status: action.status,
        data: action.data
      }
    default:
      return state;
  }
};

const form = (state = {
  formData: {
    fromName: '',
    fromAddressLine1: '',
    fromAddressLine2: '',
    fromAddressCity: '',
    fromAddressState: '',
    fromAddressZip: '',
    toName: '',
    toAddressLine1: '',
    toAddressLine2: '',
    toAddressCity: '',
    toAddressState: '',
    toAddressZip: '',
    toMessage: '',
    imageFile: ''
  }
}, action) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:{
      const formData = state.formData
      formData[action.fieldName] = action.fieldValue

      return {
        ...state,
        formData
      }
    }
    default:
      return state;
  }
}

const appReducer = combineReducers({
  confirmation,
  form
});

const store = createStore(
  appReducer,
  applyMiddleware(logger)
);

export default store;
