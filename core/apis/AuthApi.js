import axiosAuth from '../lib/axiosAuth';
import { BLOG_API } from '../lib/constants';

export const userLogin =  (loginInfo) => {
    let data = new FormData();
    data.append('id',loginInfo.id);
    data.append('password',loginInfo.password);

    return axiosAuth.post(`${BLOG_API}/user/login`,data);
};

export const getAuthInfo =  () => {
    return axiosAuth.get(`${BLOG_API}/user/check/jwt`);
};
