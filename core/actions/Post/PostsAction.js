import { asyncActionTypeCreator, asyncActionCreator } from '../../util/ReduxUtil';

const prefix = 'posts_';
// 해당 카테고리 게시글 리스트 GET
export const POSTS = asyncActionTypeCreator(`${prefix}posts_`,'ASYNC');
export const getPosts = asyncActionCreator(POSTS);

// 해당 카테고리 게시글 리스트 GET
export const RECENT_POSTS = asyncActionTypeCreator(`${prefix}recent_posts_`,'ASYNC');
export const getRecentPosts = asyncActionCreator(RECENT_POSTS);
