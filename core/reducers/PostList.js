import { handleActions } from 'redux-actions';
import * as Blog from '../actions/BlogAction';
import { POSTLIST } from '../util/DummyData';

const initialState = {
    postList: []
};

export const PostListReducer =  handleActions({
    [Blog.getPosts.request]: (state, payload) => {
        console.log('request');
        return { ...state };
    },
    [Blog.getPosts.success]: (state, payload) => {
        console.log('success');
        return { ...state, postList: POSTLIST };
    },
    [Blog.getPosts.failure]: (state, payload) => {
        console.log('fail');
        return { ...state, postList:initialState.postList };
    },
}, initialState);


