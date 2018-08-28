import axiosAuth from '../lib/axiosAuth';

export const userLogin =  (loginInfo) => {
    let data = new FormData();
    data.append('id',loginInfo.id);
    data.append('password',loginInfo.password);

    return axiosAuth.post(`http://localhost:8080/user/login`,data);
};

export const getAuthInfo =  () => {
    return axiosAuth.get(`http://localhost:8080/user/check/jwt`);
};
