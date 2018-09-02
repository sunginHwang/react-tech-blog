import {call, all, takeLatest, put } from "redux-saga/effects";

import * as PostViewAction from "../actions/Post/PostViewAction";
import * as postUpsertAction from "../actions/Post/PostUpsertAction";
import * as PostsAction from "../actions/Post/PostsAction";

import { asyncSaga } from '../util/reduxUtil';
import { goPostEditPage, goPostListPage } from '../util/RouteUtil';

import * as BlogApi  from '../apis/BlogApi';



function * getPostInfoSaga(info) {
    yield call(asyncSaga,PostViewAction.getPostInfo, BlogApi.getPostInfo, info.payload);
}

function * modifyPostSaga(info) {
    yield put(postUpsertAction.settingPostInfo(info.payload));
    yield goPostEditPage();
}

function * removePostSaga(info) {
    yield put(PostViewAction.deletePost.request()); // 요청대기

    try {
        yield call(BlogApi.deletePost, info.payload); // 비동기처리 promise
        yield put(PostViewAction.deletePost.success()); // 비동기 처리 성공
        const { categoryNo } = yield info.payload;
        yield put(PostsAction.getPosts(categoryNo));
        yield goPostListPage(categoryNo);
    } catch(error) {
        yield put(PostViewAction.deletePost.failure(error)); // 비동기 처리 실패
    }

}

export default function* root() {
    yield all([
        takeLatest(PostViewAction.POST_INFO.INDEX, getPostInfoSaga),
        takeLatest(PostViewAction.DELETE_POST.INDEX, removePostSaga),
        takeLatest(PostViewAction.MODIFY_POST, modifyPostSaga)
    ]);
}