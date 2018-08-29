import {asyncActionTypeCreator, asyncActionCreator} from "../../util/reduxUtil";
import {createAction} from "redux-actions";

export const POST_UPSERT = asyncActionTypeCreator('Post_upsert_postUpsert','ASYNC');
export const upsertPost = asyncActionCreator(POST_UPSERT);

export const SET_CATEGORY = 'Post_upsert_set_category';
export const setCategory = createAction(SET_CATEGORY);

export const SET_TITLE = 'Post_upsert_set_title';
export const setTitle = createAction(SET_TITLE);

export const SET_CONTENT= 'Post_upsert_set_content';
export const setContent = createAction(SET_CONTENT);

// 카테고리
export const CATEGORIES = asyncActionTypeCreator('Post_upsert_categories','ASYNC');
export const getCategories = asyncActionCreator(CATEGORIES);

// 임시 에러 처리 방법
export const TOGGLE_ERROR= 'Post_upsert_toggle_error';
export const toggleError = createAction(TOGGLE_ERROR);

// 미리보기 모달
export const TOGGLE_ORIGIN_PREVIEW_MODAL= 'Post_upsert_toggle_origin_preview_modal';
export const toggleOriginPreview = createAction(TOGGLE_ORIGIN_PREVIEW_MODAL);

export const SETTING_POST_INFO= 'POST_UPSERT_SETTING_POST_INFO';
export const settingPostInfo = createAction(SETTING_POST_INFO);