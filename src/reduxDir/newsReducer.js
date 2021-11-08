export const GET_NEWS = 'GET_NEWS';
export const PUT_NEWS = 'PUT_NEWS';

export function newsReducer(state = [], action) {
  if (action.type === PUT_NEWS) {
    return ([...action.payload]);
  }
  return state;
}

export const actionGetData = () => {
  return ({ type: GET_NEWS });
};

export const actionPutData = (payload) => {
  return ({ type: PUT_NEWS, payload });
};
