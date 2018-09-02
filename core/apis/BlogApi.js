import axiosAuth from '../lib/axiosAuth';
import { BLOG_API } from '../lib/constants';

export const getPostList =  (categoryNo) => {
    return axiosAuth.get(`${BLOG_API}/post/categories/${categoryNo}/posts`);
};

export const getPostInfo =  (post) => {
    return axiosAuth.get(`${BLOG_API}/post/categories/${post.categoryNo}/posts/${post.postNo}`);
};

export const getCategories =  () => {
    return axiosAuth.get(`${BLOG_API}/post/categories`);
};

export const upsertPost =  (postData) => {
    return axiosAuth.post(`${BLOG_API}/post`,postData);
};

export const deletePost =  (postData) => {
    return axiosAuth.delete(`${BLOG_API}/post`,{ data: { categoryNo: postData.categoryNo, postNo: postData.postNo }});
};
