import axiosAuth from '../lib/axiosAuth';

export const getPostList =  (categoryNo) => {
    return axiosAuth.get(`http://localhost:8080/post/categories/${categoryNo}/posts`);
};

export const getPostInfo =  (post) => {
    return axiosAuth.get(`http://localhost:8080/post/categories/${post.categoryNo}/posts/${post.postNo}`);
};

export const getCategories =  () => {
    return axiosAuth.get(`http://localhost:8080/post/categories`);
};

export const upsertPost =  (postData) => {
    return axiosAuth.post(`http://localhost:8080/post`,postData);
};

export const deletePost =  (postData) => {
    return axiosAuth.delete(`http://localhost:8080/post`,{ data: { categoryNo: postData.categoryNo, postNo: postData.postNo }});
};
