import { handleActions } from 'redux-actions';
import * as action from '../actions/post/PostsAction';

const initialState = {
    posts: []
};

export default handleActions({
    [action.getPosts.request]: (state, action) => {
        return { ...state };
    },
    [action.getPosts.success]: (state, action) => {
        return { ...state, posts: action.payload.data };
    },
    [action.getPosts.failure]: (state, action) => {
        return { ...state, posts:initialState.posts };
    },
    [action.getRecentPosts.request]: (state, action) => {
        return { ...state };
    },
    [action.getRecentPosts.success]: (state, action) => {
        return { ...state, posts: action.payload.data };
    },
    [action.getRecentPosts.failure]: (state, action) => {
        return { ...state, posts:initialState.posts };
    },
}, initialState);


