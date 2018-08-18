import {call, all, takeLatest } from "redux-saga/effects";
import * as PostsAction from "../actions/Post/PostsAction";
import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

function * asyncRequestSaga(info) {
    yield call(asyncSaga,PostsAction.getPosts, BlogApi.getPostList, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(PostsAction.POSTS.INDEX, asyncRequestSaga) // asyncCall
    ]);
}