import { handleActions } from 'redux-actions';
import * as Blog from '../actions/BlogAction';

const initialState = {
    post:{
        postNo:0,
        title: '',
        content: '',
        author:'',
        createdAt:''
    }
};

export const PostInfoReducer =  handleActions({
    [Blog.getPostInfo.request]: (state, payload) => {
        return { ...state };
    },
    [Blog.getPostInfo.success]: (state, result) => {
        return { ...state, post: result.payload.data.data};
    },
    [Blog.getPostInfo.failure]: (state, payload) => {
        return { ...state, post: initialState.post };
    },
}, initialState);


