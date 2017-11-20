import { RECEIVE_CONFIRMATION, CHANGE_FORM_FIELD, CLEAR_TO_FIELDS, FINISH_FETCHING, START_FETCHING } from '../actions/actions.js';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const confirmation = (state = { status: null, data: null, isFetching: false}, action) => {
  switch (action.type) {
    case RECEIVE_CONFIRMATION:
      return {
        ...state,
        status: action.status,
        data: action.data
      }
      
    case FINISH_FETCHING:
      return {
        ...state,
        isFetching: false        
      }

    case START_FETCHING:
      return {
        ...state,
        isFetching: true
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
    case CHANGE_FORM_FIELD: {
      const formData = state.formData
      formData[action.fieldName] = action.fieldValue

      return {
        ...state,
        formData
      }
    }
    case CLEAR_TO_FIELDS:{
      const formData = {
        ...state.formData,
        toName: '',
        toAddressLine1: '',
        toAddressLine2: '',
        toAddressCity: '',
        toAddressState: '',
        toAddressZip: '',
        toMessage: '',
        imageFile: ''
      }
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
