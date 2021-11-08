import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import changeStyleWatcher from './styleSaga';
import { getDataWatcher } from './dataSaga';

function* rootSaga() {
  yield all([
    changeStyleWatcher(),
    getDataWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
