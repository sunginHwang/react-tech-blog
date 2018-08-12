import {call, all, takeLatest } from "redux-saga/effects";
import * as BlogAction from "../actions/BlogAction";
import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

function * asyncPostInfo(info) {
    yield call(asyncSaga,BlogAction.getCategories, BlogApi.getCategories, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(BlogAction.CATEGORIES.INDEX, asyncPostInfo)
    ]);
}