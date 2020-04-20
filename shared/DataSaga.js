import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_DATA_REQUEST, getDataFail, getDataSuccess} from './DataActions';
import {getData} from '../sagas/api';
import {sendNetworkFail} from '../sagas/actions';

export function* watchGetData() {
  yield takeLatest(GET_DATA_REQUEST, handleGetData);
}

function* handleGetData(action) {
  const response = yield call(getData, action.payload);
  if (response !== []) {
    yield put(getDataSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getDataFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getDataFail(response.problem));
    }
  }
}
