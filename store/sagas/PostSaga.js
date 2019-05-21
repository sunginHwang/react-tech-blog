import {call, all, takeLatest, put} from "redux-saga/es/effects";

import * as PostViewAction from "../actions/post/PostAction";
import * as postUpsertAction from "../actions/post/PostUpsertAction";
import * as PostsAction from "../actions/post/PostsAction";

import { asyncSagaCallBack } from '../../core/util/ReduxSagaUtil';
import {goPostEditPage, goPostListPage, goBack} from '../../core/util/RouteUtil';

import * as BlogApi from '../../core/apis/BlogApi';


function* getPostSaga(info) {
    yield call(asyncSagaCallBack, PostViewAction.getPost, BlogApi.getPostInfo, info.payload,
        function* success(success) {
        },
        function* failure(error) {
            const { message } = yield error;
            alert(message !== undefined ? message : '다시 조회해 주세요.');
            yield goBack();
        })
}

function* removePostSaga(info) {
    yield call(asyncSagaCallBack, PostViewAction.deletePost, BlogApi.deletePost, info.payload,
        function* success(success) {
            const {categoryNo} = yield info.payload;
            yield put(PostsAction.getPosts(categoryNo));
            yield goPostListPage(categoryNo);
        },
        function* failure(error) {
            const { message } = yield error;
            alert(message !== undefined ? message : '삭제 실패.');
        });
}

function* modifyPostSaga(info) {
    yield put(postUpsertAction.settingPostInfo(info.payload));
    yield goPostEditPage();
}

export default function* root() {
    yield all([
        takeLatest(PostViewAction.GET_POST.INDEX, getPostSaga),
        takeLatest(PostViewAction.DELETE_POST.INDEX, removePostSaga),
        takeLatest(PostViewAction.MODIFY_POST, modifyPostSaga)
    ]);
}
