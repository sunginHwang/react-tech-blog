import { handleActions } from 'redux-actions';
import * as action from '../actions/post/PostAction';

const initialState = {
    post:{
        postNo:0,
        title: '',
        content: '',
        writer:{
            no:0,
            nickName: '',
            imageUrl: ''
        },
        authorNo: '',
        categoryLabel:'',
        createdAt:''
    },
    loading: false
};

export default handleActions({
    [action.getPost.request]: (state, action) => {
        return { ...state, loading: true };
    },
    [action.getPost.success]: (state, action) => {
        return { ...state, post: action.payload.data, loading: false};
    },
    [action.getPost.failure]: (state, action) => {
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


