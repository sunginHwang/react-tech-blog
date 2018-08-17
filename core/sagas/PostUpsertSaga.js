import {call, all, takeLatest, put} from "redux-saga/effects";
import * as BlogAction from "../actions/BlogAction";
import * as BlogApi  from '../apis/BlogApi';

import Router from "next/router";


function * postUpsertSaga(info) {
    yield put(BlogAction.upsertPost.request()); // 요청대기
    try {
        const json = yield call(BlogApi.upsertPost, info.payload); // 비동기처리 promise
        yield put(BlogAction.upsertPost.success(json)); // 비동기 처리 성공
        const { postNo, categoryNo } = yield json.data.data;
        yield put(BlogAction.getPosts(categoryNo));
        yield put(Router.push(`/postDetail?postNo=${postNo}&categoryNo=${categoryNo}`, `/categories/${categoryNo}/posts/${postNo}`));
    } catch(error) {
        yield put(BlogAction.upsertPost.failure(error)); // 비동기 처리 실패
    }
}

export default function* root() {
    yield all([
        takeLatest(BlogAction.POST_UPSERT.INDEX, postUpsertSaga) // asyncCall
    ]);
}