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

export default handleActions({
    [action.setCategory]: (state, action) => {
        return { ...state, category:action.payload };
    },
    [action.setContent]: (state, action) => {
        return { ...state, content: action.payload };
    },
    [action.setTitle]: (state, action) => {
        return { ...state, title:action.payload };
    },
    [action.toggleError]: (state, action) => {
        return { ...state, error:action.payload };
    },
    [action.toggleOriginPreview]: (state, action) => {
        return { ...state, previewModal: action.payload};
    },
    [action.upsertPost.request]: (state, action) => {
        return { ...state };
    },
    [action.upsertPost.success]: (state, action) => {
        return { ...state, postNo: initialState.postNo, category: initialState.category, title: initialState.title, content: initialState.content };
    },
    [action.upsertPost.failure]: (state, action) => {
        return { ...state, error: true, errorMsg: action.payload.message };
    },
    [action.settingPostInfo]: (state, action) => {
        return { ...state, postNo: action.payload.postNo, category: action.payload.category, title: action.payload.title, content: action.payload.content };
    },
}, initialState);


