export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD'
export const CLEAR_TO_FIELDS = 'CLEAR_TO_FIELDS'

export const changeFormField = (fieldName, fieldValue) => ({
  type: CHANGE_FORM_FIELD,
  fieldName,
  fieldValue
})

export const clearToFields = () => ({
  type: CLEAR_TO_FIELDS
})

export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';

export const receiveConfirmation = (status, data) => ({
  type: RECEIVE_CONFIRMATION,
  status,
  data
});

export const FINISH_FETCHING = 'FINISH_FETCHING';

export const finishFetching = () => ({
  type: FINISH_FETCHING
});

export const START_FETCHING = 'START_FETCHING';

export const startFetching = () => ({
  type: START_FETCHING
});


