import { asyncActionTypeCreator, asyncActionCreator } from '../../util/ReduxUtil';
import {createAction} from "redux-actions";


// 로그인
export const LOGIN = asyncActionTypeCreator('USER_ACTION_LOGIN_','ASYNC');
export const login = asyncActionCreator(LOGIN);
// 로그아웃
export const LOGOUT= 'LOGOUT';
export const logout = createAction(LOGOUT);

export const CHANGE_LOGIN_INPUT_INFO= 'USER_ACTION_CHANGE_LOGIN_INPUT_INFO';
export const changeLoginInputInfo = createAction(CHANGE_LOGIN_INPUT_INFO);

export const LOAD_AUTH_INFO = asyncActionTypeCreator('LOAD_AUTH_INFO','ASYNC');
export const loadAuthInfo = asyncActionCreator(LOAD_AUTH_INFO);
