import { handleActions } from 'redux-actions';
import * as Blog from '../actions/BlogAction';

const initialState = {
    postList: []
};

export const PostListReducer =  handleActions({
    [Blog.getPosts.request]: (state, payload) => {
        return { ...state };
    },
    [Blog.getPosts.success]: (state, result) => {
        return { ...state, postList: result.payload.data.data };
    },
    [Blog.getPosts.failure]: (state, payload) => {
        return { ...state, postList:initialState.postList };
    },
}, initialState);


