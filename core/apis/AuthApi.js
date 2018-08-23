import axios from 'axios';


export const userLogin =  (loginInfo) => {
    let data = new FormData();
    data.append('id',loginInfo.id);
    data.append('password',loginInfo.password);

    return axios.post(`http://localhost:8080/user/login`,data);
};
