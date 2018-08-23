import {call, all, takeLatest, put} from "redux-saga/effects";
import * as PostUpsertAction from "../actions/Post/PostUpsertAction";
import * as UserAction from "../actions/User/UserAction";
import { ACCESS_TOKEN } from '../lib/constants';
import * as AuthApi  from '../apis/AuthApi';



function * loginSaga(info) {
    yield put(UserAction.login.request());

    try {
        const json = yield call(AuthApi.userLogin, info.payload);
        yield put(UserAction.login.success(json));
        const { authToken } = yield json.data.data;
        yield localStorage.setItem(ACCESS_TOKEN, authToken);

    } catch(error) {
        yield put(PostUpsertAction.upsertPost.failure(error));
    }
}

export default function* root() {
    yield all([
        takeLatest(UserAction.LOGIN.INDEX, loginSaga) // asyncCall
    ]);
}