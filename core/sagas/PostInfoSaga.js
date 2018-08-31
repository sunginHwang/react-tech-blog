import {call, all, takeLatest, put } from "redux-saga/effects";
import * as PostViewAction from "../actions/Post/PostViewAction";
import * as postUpsertAction from "../actions/Post/PostUpsertAction";

import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

import Router from "next/router";
import * as PostsAction from "../actions/Post/PostsAction";


function * getPostInfo(info) {
    yield call(asyncSaga,PostViewAction.getPostInfo, BlogApi.getPostInfo, info.payload);
}

function * modifyPost(info) {
    yield console.log(info);
    yield put(postUpsertAction.settingPostInfo(info.payload));
    yield Router.push('/postEdit','/edit');

}

function * removePost(info) {
    yield put(PostViewAction.deletePost.request()); // 요청대기
    try {

        yield call(BlogApi.deletePost, info.payload); // 비동기처리 promise
        yield put(PostViewAction.deletePost.success()); // 비동기 처리 성공
        yield console.log(info.payload);
        const { categoryNo } = yield info.payload;
        yield put(PostsAction.getPosts(categoryNo));
        yield Router.push(`/postList?categoryNo=${categoryNo}`, `/categories/${categoryNo}`);
    } catch(error) {
        yield put(PostViewAction.deletePost.failure(error)); // 비동기 처리 실패
    }
}

export default function* root() {
    yield all([
        takeLatest(PostViewAction.POST_INFO.INDEX, getPostInfo),
        takeLatest(PostViewAction.DELETE_POST.INDEX, removePost),
        takeLatest(PostViewAction.MODIFY_POST, modifyPost)
    ]);
}