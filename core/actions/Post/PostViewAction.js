import { asyncActionTypeCreator, asyncActionCreator } from '../../util/ReduxUtil';
import {createAction} from "redux-actions";

// 해당 게시글  GET
export const POST_INFO = asyncActionTypeCreator('POST_VIEW_POST_INFO','ASYNC');
export const getPostInfo = asyncActionCreator(POST_INFO);

// 게시글 삭제
export const DELETE_POST = asyncActionTypeCreator('POST_VIEW_DELETE_POST','ASYNC');
export const deletePost = asyncActionCreator(DELETE_POST);

// 게시글 초기화
export const POST_INFO_INITIALIZE= 'POST_VIEW_POST_INFO_INITIALIZE';
export const postInfoInitialize = createAction(POST_INFO_INITIALIZE);

export const MODIFY_POST= 'POST_VIEW_MODIFY_POST';
export const modifyPost = createAction(MODIFY_POST);

export const TEST_GET= 'TEST_GET';
export const TestGet = createAction(TEST_GET);
