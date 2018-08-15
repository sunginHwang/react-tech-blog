import { handleActions } from 'redux-actions';
import * as Blog from '../actions/BlogAction';

const initialState = {
    postNo: 0,
    category: null,
    title: '',
    content: '',
    error: false,
    errorMsg: ''
};

export const PostWriteReducer =  handleActions({
    [Blog.setCategory]: (state, result) => {
        return { ...state, category:result.payload };
    },
    [Blog.setContent]: (state, result) => {
        return { ...state, content: result.payload };
    },
    [Blog.setTitle]: (state, result) => {
        return { ...state, title:result.payload };
    },
    [Blog.toggleError]: (state, result) => {
        return { ...state, error:result.payload };
    },
    [Blog.upsertPost.request]: (state, payload) => {
        return { ...state };
    },
    [Blog.upsertPost.success]: (state, result) => {
        return { ...state };
    },
    [Blog.upsertPost.failure]: (state, result) => {
        return { ...state, error: true, errorMsg: result.payload.response.data.message };
    },
}, initialState);


