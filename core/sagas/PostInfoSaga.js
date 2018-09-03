import {call, all, takeLatest, put} from "redux-saga/effects";

import * as PostViewAction from "../actions/Post/PostViewAction";
import * as postUpsertAction from "../actions/Post/PostUpsertAction";
import * as PostsAction from "../actions/Post/PostsAction";

import { asyncSagaCallBack } from '../util/reduxUtil';
import {goPostEditPage, goPostListPage, goBack} from '../util/RouteUtil';

import * as BlogApi from '../apis/BlogApi';


function* getPostInfoSaga(info) {

    yield call(asyncSagaCallBack, PostViewAction.getPostInfo, BlogApi.getPostInfo, info.payload,
        (success) => {
        },
        async (error) => {
            const { message } = error;
            await alert(message !== undefined ? message : '다시 조회해 주세요.');
            await goBack();
        })
}

function* modifyPostSaga(info) {
    yield put(postUpsertAction.settingPostInfo(info.payload));
    yield goPostEditPage();
}

function* removePostSaga(info) {
    yield call(asyncSagaCallBack, PostViewAction.deletePost, BlogApi.deletePost, info.payload,
        async (success)  => {
            const {categoryNo} = await info.payload;
            await put(PostsAction.getPosts(categoryNo));
            await goPostListPage(categoryNo);
        },
        async (error) => {
            const { message } = error;
            await alert(message !== undefined ? message : '삭제 실패.');
        });

}

export default function* root() {
    yield all([
        takeLatest(PostViewAction.POST_INFO.INDEX, getPostInfoSaga),
        takeLatest(PostViewAction.DELETE_POST.INDEX, removePostSaga),
        takeLatest(PostViewAction.MODIFY_POST, modifyPostSaga)
    ]);
}