import { asyncActionTypeCreator, asyncActionCreator } from '../../util/reduxUtil';

// 해당 게시글 리스트 GET
export const POST_INFO = asyncActionTypeCreator('post_view_postInfo','ASYNC');
export const getPostInfo = asyncActionCreator(POST_INFO);
