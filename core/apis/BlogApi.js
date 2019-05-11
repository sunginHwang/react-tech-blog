import apiCall from '../lib/apiCall';
import {BLOG_API} from '../lib/constants';

export const getPostList = (categoryNo) => {
    return apiCall.get(`${BLOG_API}/post/categories/${categoryNo}/posts`);
};

export const getPostInfo = ({categoryNo, postNo }) => {
    return apiCall.get(`${BLOG_API}/post/categories/${categoryNo}/posts/${postNo}`);
};

export const getRecentPostList = () => {
    return apiCall.get(`${BLOG_API}/post/categories/new/posts`);
};

export const getCategories = () => {
    return apiCall.get(`${BLOG_API}/post/categories`);
};

export const upsertPost = (postData) => {
    return apiCall.post(`${BLOG_API}/post`, postData);
};

export const deletePost = ({categoryNo, postNo}) => {
    return apiCall.delete(`${BLOG_API}/post`, {data: {categoryNo, postNo}});
};
