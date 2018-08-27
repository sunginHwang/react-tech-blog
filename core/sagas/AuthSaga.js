import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/Post/PostUpsertAction";
import * as UserAction from "../actions/User/UserAction";
import { ACCESS_TOKEN } from '../lib/constants';
import * as AuthApi  from '../apis/AuthApi';
import Router from "next/router";




function * loginSaga(info) {
    yield put(UserAction.login.request());

    try {
        const json = yield call(AuthApi.userLogin, info.payload);
        yield put(UserAction.login.success(json));
        const { authToken } = yield json.data.data;
        yield localStorage.setItem(ACCESS_TOKEN, authToken);
        yield Router.push(`/`, `/`);
    } catch(error) {
        yield put(PostUpsertAction.upsertPost.failure(error));
        yield alert('로그인 정보가 맞지 않습니다.');
    }
}

export default function* root() {
    yield all([
        takeLatest(UserAction.LOGIN.INDEX, loginSaga) // asyncCall
    ]);
}