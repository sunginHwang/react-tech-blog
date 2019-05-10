import { asyncActionTypeCreator, asyncActionCreator } from '../util/ReduxUtil';
import {createAction} from "redux-actions";

const prefix = 'USER_';


// 로그인
export const LOGIN = asyncActionTypeCreator(`${prefix}LOGIN`);
export const login = asyncActionCreator(LOGIN);

export const LOAD_AUTH_INFO = asyncActionTypeCreator(`${prefix}FETCH_AUTH_INFO`);
export const loadAuthInfo = asyncActionCreator(LOAD_AUTH_INFO);

// 로그아웃
export const LOGOUT = `${prefix}LOGOUT`;
export const logout = createAction(LOGOUT);

export const changeLoginInputInfo = createAction(`${prefix}CHANGE_LOGIN_INPUT_INFO`);
