import {call, all, takeLatest, put} from "redux-saga/effects";
import * as BlogAction from "../actions/BlogAction";
import * as BlogApi  from '../apis/BlogApi';
import * as SampleApi  from '../apis/SampleApi';

import Router from "next/router";


function * postUpsertSaga(info) {
    yield put(BlogAction.upsertPost.request()); // 요청대기
    try {
        const json = yield call(BlogApi.upsertPost, info.payload); // 비동기처리 promise
        yield put(BlogAction.upsertPost.success(json)); // 비동기 처리 성공
        yield put(Router.push(`/postDetail?postNo=1&categoryNo=1`, `/categories/1/posts/1`));
    } catch(error) {
        yield put(BlogAction.upsertPost.failure(error)); // 비동기 처리 실패
    }
}

export default function* root() {
    yield all([
        takeLatest(BlogAction.POST_UPSERT.INDEX, postUpsertSaga) // asyncCall
    ]);
}