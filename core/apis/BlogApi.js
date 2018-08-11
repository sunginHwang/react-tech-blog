import axios from 'axios';

export const getPostList =  (categoryNo) => {
    return axios.get(`http://localhost:8080/post/categories/${categoryNo}/posts`);
};

export const getPostInfo =  (categoryNo, postNo) => {
    return axios.get(`http://localhost:8080/post/categories/1/posts/${categoryNo}`);
};
