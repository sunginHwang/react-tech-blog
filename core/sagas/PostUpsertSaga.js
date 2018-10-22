import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/Post/PostUpsertAction";
import * as PostsAction from "../actions/Post/PostsAction";

import * as BlogApi from '../apis/BlogApi';
import {goPostDetailPage} from '../util/RouteUtil';
import {asyncSagaCallBack } from '../util/ReduxSagaUtil';


function* postUpsertSaga(info) {
    yield call(asyncSagaCallBack, PostUpsertAction.upsertPost, BlogApi.upsertPost, info.payload,
        function* success(success) {
            const {postNo, categoryNo} = yield success.data;
            yield put(PostsAction.getPosts(categoryNo));
            yield goPostDetailPage(categoryNo, postNo);
        },
        function* failure(error) {
            const { message } = yield error;
            yield alert(message !== undefined ? message : '게시글 편집 실패.');
        });

}

export default function* root() {
    yield all([
        takeLatest(PostUpsertAction.POST_UPSERT.INDEX, postUpsertSaga) // asyncCall
    ]);
}

