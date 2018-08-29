import { handleActions } from 'redux-actions';
import * as action from '../actions/Post/PostUpsertAction';

const initialState = {
    postNo: 0,
    category: null,
    title: '',
    content: '',
    error: false,
    errorMsg: '',
    previewModal : false
};

export const PostWriteReducer =  handleActions({
    [action.setCategory]: (state, result) => {
        return { ...state, category:result.payload };
    },
    [action.setContent]: (state, result) => {
        return { ...state, content: result.payload };
    },
    [action.setTitle]: (state, result) => {
        return { ...state, title:result.payload };
    },
    [action.toggleError]: (state, result) => {
        return { ...state, error:result.payload };
    },
    [action.toggleOriginPreview]: (state, result) => {
        return { ...state, previewModal: result.payload};
    },
    [action.upsertPost.request]: (state, payload) => {
        return { ...state };
    },
    [action.upsertPost.success]: (state, result) => {
        return { ...state, postNo: initialState.postNo, category: initialState.category, title: initialState.title, content: initialState.content };
    },
    [action.upsertPost.failure]: (state, result) => {
        return { ...state, error: true, errorMsg: result.payload.response.data.message };
    },
    [action.settingPostInfo]: (state, result) => {
        console.log(result);
        return { ...state, postNo: result.payload.postNo, category: result.payload.category, title: result.payload.title, content: result.payload.content };
    },
}, initialState);


