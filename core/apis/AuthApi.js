import apiCall from '../lib/apiCall';
import { BLOG_API } from '../lib/constants';

export const userLogin =  (loginInfo) => {
    let data = new FormData();
    data.append('id',loginInfo.id);
    data.append('password',loginInfo.password);

    return apiCall.post(`${BLOG_API}/user/login`,data);
};

export const getAuthInfo =  () => {
    return apiCall.get(`${BLOG_API}/user/check/jwt`);
};
