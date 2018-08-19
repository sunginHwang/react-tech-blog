import { asyncActionTypeCreator, asyncActionCreator } from '../../util/reduxUtil';
import {createAction} from "redux-actions";

// 해당 게시글 리스트 GET
export const POST_INFO = asyncActionTypeCreator('post_view_postInfo','ASYNC');
export const getPostInfo = asyncActionCreator(POST_INFO);

// 게시글 초기화
export const POST_INFO_INITIALIZE= 'Post_view_post_info_initialize';
export const postInfoInitialize = createAction(POST_INFO_INITIALIZE);
