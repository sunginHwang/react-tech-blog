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
    [action.getPostInfo.request]: (state, payload) => {
        return { ...state };
    },
    [action.getPostInfo.success]: (state, result) => {
        return { ...state, post: result.payload.data.data};
    },
    [action.getPostInfo.failure]: (state, payload) => {
        return { ...state, post: initialState.post };
    },
}, initialState);


