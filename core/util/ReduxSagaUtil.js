import { togglePageLoading } from '../actions/LayoutAction';
import { call, put } from "redux-saga/effects";


/*비동기 통신 자동화*/
export function * asyncSaga(asyncFunction, apiFunction, payload) {

    yield put(asyncFunction.request()); // 요청대기
    try {
        const result = yield call(apiFunction,payload); // 비동기처리 promise

        if( result.data.code === 'SUCCESS' ){
            yield put(asyncFunction.success(result.data)); // 비동기 처리 성공
        }else{
            yield put(asyncFunction.failure(result.data)); // 비동기 처리 실패
        }

    } catch(error) {
        yield put(asyncFunction.failure(error)); // 비동기 처리 실패
    }
}

export function * asyncSagaCallBack(asyncFunc, apiFunc, payload, successFunc, failureFunc) {

    yield put(togglePageLoading(true));
    yield put(asyncFunc.request()); // 요청대기
    yield console.log('asyncCallbackIn');
    try {
        yield console.log('asyncApiCallStart');

        const result = yield call(apiFunc,payload); // 비동기처리 promise
        yield console.log('asyncApiCallEnd');
        if( result.data.code === 'SUCCESS' ){
            yield put(togglePageLoading(false));
            yield console.log('asyncAPISUCCESS');
            yield put(asyncFunc.success(result.data)); // 비동기 처리 성공
            yield call(successFunc, result.data);
        }else{
            yield put(togglePageLoading(false));
            yield put(asyncFunc.failure(result)); // 비동기 처리 실패
            yield call(failureFunc(result.data));
        }

    } catch(error) {
        yield put(togglePageLoading(false));
        yield put(asyncFunc.failure(error)); // 비동기 처리 실패
        yield call(failureFunc({
            message: error
        }));

    }
}
