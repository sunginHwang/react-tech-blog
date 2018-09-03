import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/Post/PostUpsertAction";
import * as PostsAction from "../actions/Post/PostsAction";

import * as BlogApi from '../apis/BlogApi';
import {goPostDetailPage} from '../util/RouteUtil';
import {asyncSagaCallBack} from '../util/reduxUtil';


function* postUpsertSaga(info) {
    yield call(asyncSagaCallBack, PostUpsertAction.upsertPost, BlogApi.upsertPost, info.payload,
        async (success) => {
            const {postNo, categoryNo} = await success.data;
            await put(PostsAction.getPosts(categoryNo));
            await goPostDetailPage(categoryNo, postNo);
        },
        async (error) => {
            const { message } = error;
            await alert(message !== undefined ? message : '게시글 편집 실패.');
        });

}

export default function* root() {
    yield all([
        takeLatest(PostUpsertAction.POST_UPSERT.INDEX, postUpsertSaga) // asyncCall
    ]);
}

