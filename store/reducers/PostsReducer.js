import { handleActions } from 'redux-actions';
import * as action from '../actions/post/PostsAction';

const initialState = {
    posts: [],
    loading: false
};

export default handleActions({
    [action.getPosts.request]: (state, action) => {
        return { ...state, loading: true };
    },
    [action.getPosts.success]: (state, action) => {
        return { ...state, posts: action.payload.data, loading: false };
    },
    [action.getPosts.failure]: (state, action) => {
        return { ...state, posts:initialState.posts, loading: false };
    },
    [action.getRecentPosts.request]: (state, action) => {
        return { ...state, loading: true };
    },
    [action.getRecentPosts.success]: (state, action) => {
        return { ...state, posts: action.payload.data, loading: false  };
    },
    [action.getRecentPosts.failure]: (state, action) => {
        return { ...state, posts:initialState.posts, loading: false  };
    },
}, initialState);


