import { asyncActionTypeCreator, asyncActionCreator } from '../../util/ReduxUtil';

const prefix = 'POSTS_';
// 해당 카테고리 게시글 리스트 GET
export const POSTS = asyncActionTypeCreator(`${prefix}FETCH_POSTS`);
export const getPosts = asyncActionCreator(POSTS);

// 해당 카테고리 게시글 리스트 GET
export const RECENT_POSTS = asyncActionTypeCreator(`${prefix}FETCH_RECENT_POSTS`);
export const getRecentPosts = asyncActionCreator(RECENT_POSTS);
