import { asyncActionTypeCreator, asyncActionCreator } from '../util/reduxUtil';


// 해당 카테고리 게시글 리스트 GET
export const POSTS = asyncActionTypeCreator('posts','ASYNC');
export const getPosts = asyncActionCreator(POSTS);

// 해당 게시글 리스트 GET

export const POST_INFO = asyncActionTypeCreator('postInfo','ASYNC');
export const getPostInfo = asyncActionCreator(POST_INFO);