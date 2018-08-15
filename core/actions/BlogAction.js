import { asyncActionTypeCreator, asyncActionCreator } from '../util/reduxUtil';
import {createAction} from "redux-actions";


// 해당 카테고리 게시글 리스트 GET
export const POSTS = asyncActionTypeCreator('posts','ASYNC');
export const getPosts = asyncActionCreator(POSTS);

// 해당 게시글 리스트 GET
export const POST_INFO = asyncActionTypeCreator('postInfo','ASYNC');
export const getPostInfo = asyncActionCreator(POST_INFO);

// 게시글 Upsert
export const POST_UPSERT = asyncActionTypeCreator('postUpsert','ASYNC');
export const upsertPost = asyncActionCreator(POST_UPSERT);

export const SET_CATEGORY = 'set_category';
export const setCategory = createAction(SET_CATEGORY);
export const SET_TITLE = 'set_title';
export const setTitle = createAction(SET_TITLE);
export const SET_CONTENT= 'set_content';
export const setContent = createAction(SET_CONTENT);

// 카테고리
export const CATEGORIES = asyncActionTypeCreator('categories','ASYNC');
export const getCategories = asyncActionCreator(CATEGORIES);

// 임시 에러 처리 방법
export const TOGGLE_ERROR= 'toggle_error';
export const toggleError = createAction(TOGGLE_ERROR);