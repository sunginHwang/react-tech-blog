import { asyncActionTypeCreator, asyncActionCreator } from '../../util/reduxUtil';
import {createAction} from "redux-actions";


// 해당 카테고리 게시글 리스트 GET
export const LOGIN = asyncActionTypeCreator('USER_ACTION_LOGIN_','ASYNC');
export const login = asyncActionCreator(LOGIN);

export const CHANGE_LOGIN_INPUT_INFO= 'USER_ACTION_CHANGE_LOGIN_INPUT_INFO';
export const changeLoginInputInfo = createAction(CHANGE_LOGIN_INPUT_INFO);
