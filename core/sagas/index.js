import { fork, all } from 'redux-saga/effects';
import SampleApi from './SampleApi';

export default function* rootSaga() {
    yield all([
        fork(SampleApi)
    ])
}