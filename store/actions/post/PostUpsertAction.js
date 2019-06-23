import {asyncActionTypeCreator, asyncActionCreator} from "../../../core/util/ReduxUtil";
import {createAction} from "redux-actions";

const prefix = 'POSTS_UPSERTS_';


export const POST_UPSERT = asyncActionTypeCreator(`${prefix}`);
export const upsertPost = asyncActionCreator(POST_UPSERT);
// 카테고리
export const CATEGORIES = asyncActionTypeCreator(`${prefix}GET_CATEGORIES`);
export const getCategories = asyncActionCreator(CATEGORIES);

// 임시 에러 처리 방법
export const toggleError = createAction(`${prefix}TOGGLE_ERROR`);
// 미리보기 모달
export const toggleOriginPreview = createAction(`${prefix}TOGGLE_ORIGIN_PREVIEW_MODAL`);
export const settingPostInfo = createAction( `${prefix}SETTING_POST_INFO`);
export const setCategory = createAction(`${prefix}SET_CATEGORY`);
export const setTitle = createAction(`${prefix}SET_TITLE`);
export const setContent = createAction(`${prefix}SET_CONTENT`);

