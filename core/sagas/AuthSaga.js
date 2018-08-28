import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/Post/PostUpsertAction";
import * as UserAction from "../actions/User/UserAction";
import { ACCESS_TOKEN, ACCESS_HEADER_TOKEN } from '../lib/constants';
import * as AuthApi  from '../apis/AuthApi';
import axiosAuth from '../lib/axiosAuth';

import Router from "next/router";




function * loginSaga(info) {
    yield put(UserAction.login.request());

    try {
        const json = yield call(AuthApi.userLogin, info.payload);
        yield put(UserAction.login.success(json));
        const { authToken } = yield json.data.data;
        yield localStorage.setItem(ACCESS_TOKEN, authToken);
        yield axiosAuth.defaults.headers.common[ACCESS_HEADER_TOKEN] = authToken;
        yield Router.push(`/`, `/`);
    } catch(error) {
        yield put(PostUpsertAction.upsertPost.failure(error));
        yield alert('로그인 정보가 맞지 않습니다.');
    }
}

function * loadAuthInfoSaga() {
    yield put(UserAction.loadAuthInfo.request());

    try {
        const json = yield call(AuthApi.getAuthInfo);
        yield put(UserAction.loadAuthInfo.success(json));
    } catch(error) {
        yield put(UserAction.loadAuthInfo.failure(error));
        yield localStorage.removeItem(ACCESS_TOKEN);
    }
}

export default function* root() {
    yield all([
        takeLatest(UserAction.LOGIN.INDEX, loginSaga),
        takeLatest(UserAction.LOAD_AUTH_INFO.INDEX, loadAuthInfoSaga)
    ]);
}