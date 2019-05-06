import apiCall from '../lib/apiCall';
import { BLOG_API } from '../lib/constants';

export const getPostList =  (categoryNo) => {
    return apiCall.get(`${BLOG_API}/post/categories/${categoryNo}/posts`);
};

export const getPostInfo = (post) => {
    return apiCall.get(`${BLOG_API}/post/categories/${post.categoryNo}/posts/${post.postNo}`);
};

export const getRecentPostList = () => {
    return apiCall.get(`${BLOG_API}/post/categories/new/posts`);
};

export const getCategories =  () => {
    return apiCall.get(`${BLOG_API}/post/categories`);
};

export const upsertPost =  (postData) => {
    return apiCall.post(`${BLOG_API}/post`,postData);
};

export const deletePost =  (postData) => {
    return apiCall.delete(`${BLOG_API}/post`,{ data: { categoryNo: postData.categoryNo, postNo: postData.postNo }});
};
