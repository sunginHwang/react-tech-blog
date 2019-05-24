import {call, all, takeLatest} from "redux-saga/effects";
import * as UserAction from "../actions/UserAction";
import {asyncSagaCallBack} from '../../core/util/ReduxSagaUtil';

import {goMainPage} from '../../core/util/RouteUtil';
import {ACCESS_TOKEN} from '../../core/lib/constants';
import * as AuthApi from '../../core/apis/AuthApi';
import {settingAccessHeaderToken} from '../../core/lib/apiCall';


function* loginSaga(info) {
    yield call(asyncSagaCallBack, UserAction.login, AuthApi.userLogin, info.payload,
        function* success(success) {
            const {authToken} = yield success.data;
            yield localStorage.setItem(ACCESS_TOKEN, authToken);
            yield settingAccessHeaderToken(authToken);
            yield goMainPage();
        },
        function* failure(error) {
            alert('로그인 정보가 맞지 않습니다.');
        });
}

function* logoutSaga() {
    yield settingAccessHeaderToken('');
    yield localStorage.removeItem(ACCESS_TOKEN);
}

function* loadAuthInfoSaga() {
    yield call(asyncSagaCallBack, UserAction.loadAuthInfo, AuthApi.getAuthInfo, null,
        function* success(success) {
        },
        function* failure(error) {
            yield localStorage.removeItem(ACCESS_TOKEN);
        });
}

export default function* root() {
    yield all([
        takeLatest(UserAction.LOGIN.INDEX, loginSaga),
        takeLatest(UserAction.LOAD_AUTH_INFO.INDEX, loadAuthInfoSaga),
        takeLatest(UserAction.LOGOUT, logoutSaga),
    ]);
}
