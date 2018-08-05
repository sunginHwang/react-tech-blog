import { handleActions } from 'redux-actions';
import * as Blog from '../actions/BlogAction';
import { POST_CONTENT, POST_TITLE } from '../util/DummyData';

const initialState = {
    title: '',
    content: ''
};

export const PostInfoReducer =  handleActions({
    [Blog.getPostInfo.request]: (state, payload) => {
        console.log('request');
        return { ...state };
    },
    [Blog.getPostInfo.success]: (state, payload) => {
        console.log('success');
        return { ...state, title: POST_TITLE, content: POST_CONTENT};
    },
    [Blog.getPostInfo.failure]: (state, payload) => {
        console.log('fail');
        return { ...state, initialState };
    },
}, initialState);


