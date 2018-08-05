import {call, all, takeLatest } from "redux-saga/effects";
import * as BlogAction from "../actions/BlogAction";
import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

function * asyncRequestSaga(info) {
    yield call(asyncSaga,BlogAction.getPosts, BlogApi.getPostList, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(BlogAction.POSTS.INDEX, asyncRequestSaga) // asyncCall
    ]);
}