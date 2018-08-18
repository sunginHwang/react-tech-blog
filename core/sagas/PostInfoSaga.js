import {call, all, takeLatest } from "redux-saga/effects";
import * as PostViewAction from "../actions/Post/PostViewAction";
import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

function * asyncPostInfo(info) {
    yield call(asyncSaga,PostViewAction.getPostInfo, BlogApi.getPostInfo, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(PostViewAction.POST_INFO.INDEX, asyncPostInfo)
    ]);
}