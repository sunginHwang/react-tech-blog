import { handleActions } from 'redux-actions';
import * as action from '../actions/Post/PostsAction';

const initialState = {
    postList: []
};

export const PostListReducer =  handleActions({
    [action.getPosts.request]: (state, payload) => {
        return { ...state };
    },
    [action.getPosts.success]: (state, result) => {
        return { ...state, postList: result.payload.data.data };
    },
    [action.getPosts.failure]: (state, payload) => {
        return { ...state, postList:initialState.postList };
    },
}, initialState);


