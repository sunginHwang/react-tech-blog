import { asyncActionTypeCreator, asyncActionCreator } from '../../util/reduxUtil';


// 해당 카테고리 게시글 리스트 GET
export const POSTS = asyncActionTypeCreator('posts_posts','ASYNC');
export const getPosts = asyncActionCreator(POSTS);

// 해당 카테고리 게시글 리스트 GET
export const RECENT_POSTS = asyncActionTypeCreator('posts_recent_posts','ASYNC');
export const getRecentPosts = asyncActionCreator(RECENT_POSTS);
