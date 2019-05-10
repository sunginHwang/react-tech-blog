import {createAction} from "redux-actions";


/*비동기 액션타입 생성자*/
export const asyncActionTypeCreator = ( prefix, actionName ='ASYNC') => {
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
