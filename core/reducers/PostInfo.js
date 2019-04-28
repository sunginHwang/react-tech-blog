import { handleActions } from 'redux-actions';
import * as action from '../actions/Post/PostViewAction';
import * as BlogApi from '../apis/BlogApi';

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
        console.log('====================================')
        console.log(action.payload);
        console.log('====================================')
        const res =  BlogApi.getPostInfo(action.payload).then(res => {
            console.log('===============async=start=====================')
            console.log(res.data.data);
            console.log('===============async=end=======================')
            return { ...state, post: res};
        });


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


