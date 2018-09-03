import {call, all, takeLatest, put} from "redux-saga/effects";
import * as UserAction from "../actions/User/UserAction";
import { asyncSagaCallBack } from '../util/reduxUtil';

import { goMainPage } from '../util/RouteUtil';
import { ACCESS_TOKEN, ACCESS_HEADER_TOKEN } from '../lib/constants';
import * as AuthApi  from '../apis/AuthApi';
import axiosAuth from '../lib/axiosAuth';





function * loginSaga(info) {
    yield call(asyncSagaCallBack, UserAction.login, AuthApi.userLogin, info.payload,
        async (success) =>{
            const { authToken } = await success.data;
            await localStorage.setItem(ACCESS_TOKEN, authToken);
            axiosAuth.defaults.headers.common[ACCESS_HEADER_TOKEN] = await authToken;
            await goMainPage();
        },
        async (error) => {
            await alert('로그인 정보가 맞지 않습니다.');
        });
}

function * logoutSaga() {
    yield axiosAuth.defaults.headers.common[ACCESS_HEADER_TOKEN] = '';
    yield localStorage.removeItem(ACCESS_TOKEN);
}

function * loadAuthInfoSaga() {
    yield call(asyncSagaCallBack, UserAction.loadAuthInfo, AuthApi.getAuthInfo, null,
        async (success) =>{
        },
        async (error) => {
            await localStorage.removeItem(ACCESS_TOKEN);
        });
}

export default function* root() {
    yield all([
        takeLatest(UserAction.LOGIN.INDEX, loginSaga),
        takeLatest(UserAction.LOAD_AUTH_INFO.INDEX, loadAuthInfoSaga),
        takeLatest(UserAction.LOGOUT, logoutSaga),
    ]);
}