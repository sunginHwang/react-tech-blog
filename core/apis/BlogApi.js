import axios from 'axios';

export const getPostList =  (categoryNo) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${categoryNo}`);
};

export const getPostInfo =  (postNo) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postNo}`);
};
