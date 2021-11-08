export const TAKE_EDITED_DATA = 'TAKE_EDITED_DATA';
export const DELETE_EDITED_DATA = 'DELETE_EDITED_DATA';

export const actionTakeData = (payload) => {
  return ({ type: TAKE_EDITED_DATA, payload });
};

export const actionDeleteEditedData = () => {
  return ({ type: DELETE_EDITED_DATA });
};

export function editedDataReducer(state = {}, action) {
  if (action.type === TAKE_EDITED_DATA) {
    return ({ ...action.payload });
  }
  if (action.type === DELETE_EDITED_DATA) {
    return {};
  }
  return state;
}
