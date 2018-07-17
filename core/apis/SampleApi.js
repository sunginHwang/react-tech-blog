import axios from 'axios';

export const getPostAPI =  (number) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`);
};
