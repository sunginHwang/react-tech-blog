import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/Post/PostUpsertAction";
import * as PostsAction from "../actions/Post/PostsAction";

import * as BlogApi  from '../apis/BlogApi';
import { goPostDetailPage } from '../util/RouteUtil';


function * postUpsertSaga(info) {
    yield put(PostUpsertAction.upsertPost.request()); // 요청대기
    try {
        const json = yield call(BlogApi.upsertPost, info.payload); // 비동기처리 promise
        yield put(PostUpsertAction.upsertPost.success(json)); // 비동기 처리 성공
        const { postNo, categoryNo } = yield json.data.data;
        yield put(PostsAction.getPosts(categoryNo));
        yield goPostDetailPage(categoryNo, postNo);
    } catch(error) {
        yield put(PostUpsertAction.upsertPost.failure(error)); // 비동기 처리 실패
    }
}

export default function* root() {
    yield all([
        takeLatest(PostUpsertAction.POST_UPSERT.INDEX, postUpsertSaga) // asyncCall
    ]);
}

