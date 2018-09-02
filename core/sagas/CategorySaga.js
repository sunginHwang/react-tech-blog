import {call, all, takeLatest } from "redux-saga/effects";
import * as CategoryAction from "../actions/CategoryAction";
import { asyncSaga } from '../util/reduxUtil';
import * as BlogApi  from '../apis/BlogApi';

function * getCategoryListSaga(info) {
    yield call(asyncSaga,CategoryAction.getCategories, BlogApi.getCategories, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(CategoryAction.CATEGORIES.INDEX, getCategoryListSaga)
    ]);
}