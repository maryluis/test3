export const CHANGE_THEME = 'CHANGE_THEME';
export const PUT_CHANGE_THEME = 'PUT_CHANGE_THEME';
export const YELLOW = 'YELLOW';
export const PINK = 'PINK';

export function themeReducer(state, action) {
  if (action.type === PUT_CHANGE_THEME) {
    if (action.payload === YELLOW) {
      return 'PINK';
    }
    if (action.payload === PINK) {
      return 'YELLOW';
    }
  } if (state === undefined) {
    return 'YELLOW';
  }
  return state;
}

export const actionChangeTheme = (payload) => {
  return ({ type: CHANGE_THEME, payload });
};

export const actionPutNewTheme = (payload) => {
  return ({ type: PUT_CHANGE_THEME, payload });
};
