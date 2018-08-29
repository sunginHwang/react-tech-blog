import {call, all, takeLatest, put } from "redux-saga/effects";
import * as PostViewAction from "../actions/Post/PostViewAction";
import * as postUpsertAction from "../actions/Post/PostUpsertAction";

import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

import Router from "next/router";


function * asyncPostInfo(info) {
    yield call(asyncSaga,PostViewAction.getPostInfo, BlogApi.getPostInfo, info.payload);
}

function * modifyPost(info) {
    yield console.log(info);
    yield put(postUpsertAction.settingPostInfo(info.payload));
    yield Router.push('/postEdit','/edit');

}

export default function* root() {
    yield all([
        takeLatest(PostViewAction.POST_INFO.INDEX, asyncPostInfo),
        takeLatest(PostViewAction.MODIFY_POST, modifyPost)
    ]);
}