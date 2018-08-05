import { fork, all } from 'redux-saga/effects';
import SampleApi from './SampleApi';
import PostListSaga from './PostListSaga';
import PostInfoSaga from './PostInfoSaga';

export default function* rootSaga() {
    yield all([
        fork(SampleApi),
        fork(PostListSaga),
        fork(PostInfoSaga)
    ])
}