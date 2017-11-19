export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD'

export const changeFormField = (fieldName, fieldValue) => ({
  type: CHANGE_FORM_FIELD,
  fieldName,
  fieldValue
})

export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';

export const receiveConfirmation = (status, data) => ({
  type: RECEIVE_CONFIRMATION,
  status,
  data
});
