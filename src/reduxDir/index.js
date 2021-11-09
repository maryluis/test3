import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionChangeTheme, themeReducer, actionPutNewTheme, CHANGE_THEME, PUT_CHANGE_THEME } from './themeReducer';
import { rootSaga, SagaMiddleware } from '../saga';
import { newsReducer, GET_NEWS, actionGetData, actionPutData } from './newsReducer';
import { formReducer, actionSaveData, actionDeleteData, SAVE_DATA, DELETE_DATA } from './formReducer';

export const store = createStore(combineReducers({
  theme: themeReducer,
  news: newsReducer,
  form: formReducer,
}), composeWithDevTools(applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(rootSaga);

export { actionChangeTheme, formReducer, actionSaveData, actionDeleteData,
  SAVE_DATA, DELETE_DATA, GET_NEWS, actionGetData, actionPutData,
  actionPutNewTheme, CHANGE_THEME, PUT_CHANGE_THEME };
