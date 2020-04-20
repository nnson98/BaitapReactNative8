import {all, fork} from 'redux-saga/effects';
import {watchGetData} from '../shared/DataSaga';
import {watchGetFollower} from '../ChamCong/FollowerSaga';

export default function* rootSaga() {
  yield all([fork(watchGetFollower), fork(watchGetData)]);
}
