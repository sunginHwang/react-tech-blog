import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/post/PostUpsertAction";
import * as PostsAction from "../actions/post/PostsAction";

import * as BlogApi from '../../core/apis/BlogApi';
import {goPostDetailPage} from '../../core/util/RouteUtil';
import {asyncSagaCallBack } from '../../core/util/ReduxSagaUtil';
import {TEMP_POST_AUTO_SAVE } from '../../core/lib/constants';


function* postUpsertSaga(info) {
    yield call(asyncSagaCallBack, PostUpsertAction.upsertPost, BlogApi.upsertPost, info.payload,
        function* success(success) {
            yield localStorage.removeItem(TEMP_POST_AUTO_SAVE); // 임시저장 삭제

            const {postNo, categoryNo} = yield success.data;

            yield put(PostsAction.getPosts(categoryNo));
            yield goPostDetailPage(categoryNo, postNo);
        },
        function* failure(error) {
            const { message } = yield error;
            alert(message !== undefined ? message : '게시글 편집 실패.');
        });

}

export default function* root() {
    yield all([
        takeLatest(PostUpsertAction.POST_UPSERT.INDEX, postUpsertSaga) // asyncCall
    ]);
}

