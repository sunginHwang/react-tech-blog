import {call, all, takeLatest } from "redux-saga/es/effects";
import * as CategoryAction from "../actions/CategoryAction";
import { asyncSaga } from '../../core/util/ReduxSagaUtil';
import * as BlogApi  from '../../core/apis/BlogApi';

function * getCategoryListSaga(info) {
    yield call(asyncSaga,CategoryAction.getCategories, BlogApi.getCategories, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(CategoryAction.CATEGORIES.INDEX, getCategoryListSaga)
    ]);
}
