import { fork, all } from 'redux-saga/effects';
import PostListSaga from './PostListSaga';
import PostInfoSaga from './PostInfoSaga';
import PostUpsertSaga from './PostUpsertSaga';
import CategorySaga from './CategorySaga';
import AuthSaga from './AuthSaga';


export default function* rootSaga() {
    yield all([
        fork(PostListSaga),
        fork(PostInfoSaga),
        fork(PostUpsertSaga),
        fork(CategorySaga),
        fork(AuthSaga)
    ])
}