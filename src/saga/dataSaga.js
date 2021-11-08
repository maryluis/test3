import { takeEvery, put, call } from 'redux-saga/effects';
import { actionPutData, GET_NEWS } from '../reduxDir';
import { getNews } from '../tools';

function* getDataWorker() {
  const data = yield call(() => getNews());
  yield put(actionPutData(data));
}

function* getDataWatcher() {
  yield takeEvery(GET_NEWS, getDataWorker);
}

export { getDataWatcher, getDataWorker };
