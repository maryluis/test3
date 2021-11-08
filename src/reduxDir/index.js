import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionChangeTheme, themeReducer, actionPutNewTheme, CHANGE_THEME, PUT_CHANGE_THEME } from './themeReducer';
import { rootSaga, SagaMiddleware } from '../saga';
import { newsReducer, GET_NEWS, actionGetData, actionPutData } from './newsReducer';
import { formReducer, actionSaveData, actionDeleteData, SAVE_DATA, DELETE_DATA } from './formReducer';
import { editedDataReducer, actionDeleteEditedData, actionTakeData, DELETE_EDITED_DATA, TAKE_EDITED_DATA } from './editedDataReducer';

export const store = createStore(combineReducers({
  theme: themeReducer,
  news: newsReducer,
  form: formReducer,
  edited: editedDataReducer,
}), composeWithDevTools(applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(rootSaga);

export { editedDataReducer, actionDeleteEditedData, actionTakeData, DELETE_EDITED_DATA, TAKE_EDITED_DATA, actionChangeTheme, formReducer, actionSaveData, actionDeleteData, SAVE_DATA, DELETE_DATA, GET_NEWS, actionGetData, actionPutData, actionPutNewTheme, CHANGE_THEME, PUT_CHANGE_THEME };
