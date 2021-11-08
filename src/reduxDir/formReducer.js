export const SAVE_DATA = 'SAVE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const actionSaveData = (payload) => {
  return ({ type: SAVE_DATA, payload });
};

export const actionDeleteData = () => {
  return ({ type: DELETE_DATA });
};

export function formReducer(state = {}, action) {
  if (action.type === SAVE_DATA) {
    return ({ ...action.payload });
  }
  if (action.type === DELETE_DATA) {
    return {};
  }
  return state;
}
