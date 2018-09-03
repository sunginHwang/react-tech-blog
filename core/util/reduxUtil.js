import {createAction} from "redux-actions";
import {call, put} from "redux-saga/effects";

/*비동기 액션타입 생성자*/
export const asyncActionTypeCreator = ( prefix, actionName ) => {
    const asyncTypeAction = ['_INDEX','_REQUEST','_SUCCESS','_FAILURE'];

    const actionNameIndex = actionName+asyncTypeAction[0];
    const actionNameRequest = actionName+asyncTypeAction[1];
    const actionNameSuccess = actionName+asyncTypeAction[2];
    const actionNameFailure = actionName+asyncTypeAction[3];

    return {
        'INDEX': prefix+actionNameIndex,
        'REQUEST': prefix+actionNameRequest,
        'SUCCESS': prefix+actionNameSuccess,
        'FAILURE': prefix+actionNameFailure,
    }

};

/*비동기 액션 생성자*/
export function asyncActionCreator(actions) {
    let actionCreator = createAction(actions.INDEX);
    actionCreator.request = createAction(actions.REQUEST);
    actionCreator.success = createAction(actions.SUCCESS);
    actionCreator.failure = createAction(actions.FAILURE);
    return actionCreator
}

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

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

    yield put(asyncFunc.request()); // 요청대기

    try {
        const result = yield call(apiFunc,payload); // 비동기처리 promise

        if( result.data.code === 'SUCCESS' ){
            yield put(asyncFunc.success(result.data)); // 비동기 처리 성공
            yield successFunc(result.data);
        }else{
            yield put(asyncFunc.failure(result)); // 비동기 처리 실패
            yield failureFunc(result.data);
        }

    } catch(error) {
        yield put(asyncFunc.failure(error)); // 비동기 처리 실패
        yield failureFunc({
            message: error
        });
    }
}
