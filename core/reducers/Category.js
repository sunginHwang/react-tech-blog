import { handleActions } from 'redux-actions';
import * as action from '../actions/CategoryAction';

const initialState = {
    categories: []
};

export const CategoryReducer =  handleActions({
    [action.getCategories.request]: (state, payload) => {
        return { ...state };
    },
    [action.getCategories.success]: (state, result) => {
        return { ...state, categories: result.payload.data.data};
    },
    [action.getCategories.failure]: (state, payload) => {
        return { ...state, categories: initialState.categories };
    },
}, initialState);


