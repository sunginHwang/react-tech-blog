import {call, all, takeLatest} from "redux-saga/effects";
import * as PostsAction from "../actions/post/PostsAction";
import {asyncSagaCallBack} from '../util/ReduxSagaUtil';
import {goBack} from '../util/RouteUtil';
import * as BlogApi from '../apis/BlogApi';

function* getPostsSaga(info) {
    yield call(asyncSagaCallBack, PostsAction.getPosts, BlogApi.getPostList, info.payload,
        function* success(success) {
        },
        function* failure(error) {
            const {message} = yield error;
            yield alert(message !== undefined ? message : '조회 실패.');
            yield goBack();
        });
}

function* getRecentPostsSaga(info) {
    yield call(asyncSagaCallBack, PostsAction.getPosts, BlogApi.getRecentPostList, info.payload,
        function* success(success) {},
        function* failure(error) {
            const {message} = yield error;
            yield alert(message !== undefined ? message : '조회 실패.');
        });
}

export default function* root() {
    yield all([
        takeLatest(PostsAction.POSTS.INDEX, getPostsSaga),
        takeLatest(PostsAction.RECENT_POSTS.INDEX, getRecentPostsSaga)
    ]);
}
