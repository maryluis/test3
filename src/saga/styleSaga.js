import { takeEvery, put } from 'redux-saga/effects';
import { actionPutNewTheme, CHANGE_THEME } from '../reduxDir';

function* changeStyleWorker(action) {
  yield put(actionPutNewTheme(action.payload));
}

function* changeStyleWatcher() {
  yield takeEvery(CHANGE_THEME, changeStyleWorker);
}

export default changeStyleWatcher;
