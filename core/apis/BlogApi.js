import axios from 'axios';

export const getPostList =  (categoryNo) => {
    return axios.get(`http://localhost:8080/post/categories/${categoryNo}/posts`);
};

export const getPostInfo =  (post) => {
    return axios.get(`http://localhost:8080/post/categories/${post.categoryNo}/posts/${post.postNo}`);
};

export const getCategories =  () => {
    return axios.get(`http://localhost:8080/post/categories`);
};

export const upsertPost =  (postData) => {
    return axios.post(`http://localhost:8080/post`,postData);
};
