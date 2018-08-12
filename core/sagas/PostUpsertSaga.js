import {call, all, takeLatest } from "redux-saga/effects";
import * as BlogAction from "../actions/BlogAction";
import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

function * asyncRequestSaga(info) {
    yield call(asyncSaga,BlogAction.upsertPost, BlogApi.upsertPost, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(BlogAction.POST_UPSERT.INDEX, asyncRequestSaga) // asyncCall
    ]);
}