import { handleActions } from 'redux-actions';
import * as action from '../actions/Post/PostViewAction';

const initialState = {
    post:{
        postNo:0,
        title: '',
        content: '',
        author:'',
        categoryLabel:'',
        createdAt:''
    }
};

export const PostInfoReducer =  handleActions({
    [action.getPostInfo.request]: (state, action) => {
        return { ...state, post: initialState.post };
    },
    [action.getPostInfo.success]: (state, action) => {
        return { ...state, post: action.payload.data};
    },
    [action.getPostInfo.failure]: (state, action) => {
        return { ...state, post: initialState.post };
    },
    [action.deletePost.request]: (state, action) => {
        return { ...state };
    },
    [action.deletePost.success]: (state, action) => {
        return { ...state, post: initialState.post};
    },
    [action.deletePost.failure]: (state, action) => {
        return { ...state };
    },
    [action.postInfoInitialize]: (state, action) => {
        return { ...state, post: initialState.post };
    },
    [action.modifyPost]: (state, action) => {
        return { ...state };
    }
}, initialState);


