import { asyncActionTypeCreator, asyncActionCreator } from '../../util/reduxUtil';


// 해당 카테고리 게시글 리스트 GET
export const LOGIN = asyncActionTypeCreator('USER_ACTION_LOGIN_','ASYNC');
export const login = asyncActionCreator(LOGIN);
