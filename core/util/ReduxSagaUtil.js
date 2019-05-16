import {call, put} from "redux-saga/effects";

/*비동기 통신 자동화*/
export function* asyncSaga(asyncFunction, apiFunction, payload) {

    yield put(asyncFunction.request()); // 요청대기
    try {
        const result = yield call(apiFunction, payload); // 비동기처리 promise

        if (result.data.code === 'SUCCESS') {
            yield put(asyncFunction.success(result.data)); // 비동기 처리 성공
        } else {
            yield put(asyncFunction.failure(result.data)); // 비동기 처리 실패
        }

    } catch (error) {
        yield put(asyncFunction.failure(error)); // 비동기 처리 실패
    }
}

export function* asyncSagaCallBack(asyncFunc, apiFunc, payload, successFunc, failureFunc) {

    yield put(asyncFunc.request()); // 요청대기

    try {

        const result = yield call(apiFunc, payload); // 비동기처리 promise

        if (result.data.code === 'SUCCESS') {
            yield put(asyncFunc.success(result.data)); // 비동기 처리 성공
            yield call(successFunc, result.data);
        } else {
            yield put(asyncFunc.failure(result)); // 비동기 처리 실패
            yield call(failureFunc, result.data);
        }

    } catch (error) {
        yield put(asyncFunc.failure(error)); // 비동기 처리 실패
        const message = yield error.response.data.code ? error.response.data.code : 'fail to api call';
        yield call(failureFunc, {message});

    }
}


