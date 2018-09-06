import { handleActions } from 'redux-actions';
import * as action from '../actions/Post/PostsAction';

const initialState = {
    postList: []
};

export const PostListReducer =  handleActions({
    [action.getPosts.request]: (state, action) => {
        return { ...state };
    },
    [action.getPosts.success]: (state, action) => {
        return { ...state, postList: action.payload.data };
    },
    [action.getPosts.failure]: (state, action) => {
        return { ...state, postList:initialState.postList };
    },
    [action.getRecentPosts.request]: (state, action) => {
        return { ...state };
    },
    [action.getRecentPosts.success]: (state, action) => {
        return { ...state, postList: action.payload.data };
    },
    [action.getRecentPosts.failure]: (state, action) => {
        return { ...state, postList:initialState.postList };
    },
}, initialState);


