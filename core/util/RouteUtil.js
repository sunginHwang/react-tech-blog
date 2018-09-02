import Router from "next/router";

export const goPostListPage = (categoryNo) => {
    Router.push(`/postList?categoryNo=${categoryNo}`, `/categories/${categoryNo}`);
};

export const goPostDetailPage = (categoryNo, postNo) => {
    Router.push(`/postDetail?postNo=${postNo}&categoryNo=${categoryNo}`, `/categories/${categoryNo}/posts/${postNo}`);
};

export const goPostEditPage = () => {
    Router.push('/postEdit','/edit');
};

export const goMainPage = () => {
    Router.push('/','/');
};

export const goLoginPage = () => {
    Router.push('/login','/login');
};