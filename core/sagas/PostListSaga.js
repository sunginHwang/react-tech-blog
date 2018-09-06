import {call, all, takeLatest} from "redux-saga/effects";
import * as PostsAction from "../actions/Post/PostsAction";
import { asyncSagaCallBack } from '../util/reduxUtil';
import {goBack} from '../util/RouteUtil';
import * as BlogApi from '../apis/BlogApi';

function* getPostListSaga(info) {
    yield call(asyncSagaCallBack, PostsAction.getPosts, BlogApi.getPostList, info.payload,
        async (success) => {
        },
        async (error) => {
            const { message } = error;
            await alert(message !== undefined ? message : '조회 실패.');
            await goBack();
        });
}

function* getRecentPostListSaga(info) {
    yield call(asyncSagaCallBack, PostsAction.getPosts, BlogApi.getRecentPostList, info.payload,
        async (success) => {
        },
        async (error) => {
            const { message } = error;
            await alert(message !== undefined ? message : '조회 실패.');
        });
}

export default function* root() {
    yield all([
        takeLatest(PostsAction.POSTS.INDEX, getPostListSaga), // asyncCall
        takeLatest(PostsAction.RECENT_POSTS.INDEX, getRecentPostListSaga)
    ]);
}