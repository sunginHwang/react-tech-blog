import { asyncActionTypeCreator, asyncActionCreator } from '../../util/ReduxUtil';
import {createAction} from "redux-actions";

const prefix = 'POST_VIEW_';


// 해당 게시글  GET
export const GET_POST = asyncActionTypeCreator(`${prefix}GET_POST`);
export const getPost = asyncActionCreator(GET_POST);

// 게시글 삭제
export const DELETE_POST = asyncActionTypeCreator(`${prefix}DELETE_POST`);
export const deletePost = asyncActionCreator(DELETE_POST);

// 게시글 초기화
export const postInfoInitialize = createAction(`${prefix}INITIALIZE`);

export const MODIFY_POST = `${prefix}MODIFY_POST`;
export const modifyPost = createAction(MODIFY_POST);
