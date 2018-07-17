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


/*비동기 통신 자동화*/
export function * asyncSaga(asyncFunction, apiFunction, payload) {

    yield put(asyncFunction.request()); // 요청대기
    try {
        const json = yield call(apiFunction,payload); // 비동기처리 promise
        yield put(asyncFunction.success(json)); // 비동기 처리 성공
    } catch(error) {
        yield put(asyncFunction.failure(error)); // 비동기 처리 실패
    }
}
