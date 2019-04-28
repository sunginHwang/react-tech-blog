import { handleActions } from 'redux-actions';
import * as action from '../actions/Post/PostViewAction';

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
    }
};

export const PostInfoReducer =  handleActions({
    [action.getPostInfo.request]: (state, action) => {
        return { ...state, post: initialState.post };
    },
    [action.getPostInfo.success]: (state, action) => {
        console.log(`api success in ${action.payload.data.categoryLabel}`);
        return { ...state, post: action.payload.data};
    },
    [action.getPostInfo.failure]: (state, action) => {
        return { ...state, post: initialState.post };
    },
    [action.TestGet]: (state, action) => {
        console.log('===============REDUCER-IN=====================')
        console.log('===============REDUCER-OUT=====================');
        return { ...state, post: action.payload};
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


