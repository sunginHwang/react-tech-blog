import { handleActions } from 'redux-actions';
import * as Blog from '../actions/BlogAction';

const initialState = {
    categories: []
};

export const CategoryReducer =  handleActions({
    [Blog.getCategories.request]: (state, payload) => {
        return { ...state };
    },
    [Blog.getCategories.success]: (state, result) => {
        console.log(result);
        return { ...state, categories: result.payload.data.data};
    },
    [Blog.getCategories.failure]: (state, payload) => {
        return { ...state, categories: initialState.categories };
    },
}, initialState);


