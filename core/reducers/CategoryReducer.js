import { handleActions } from 'redux-actions';
import * as action from '../actions/CategoryAction';

const initialState = {
    categories: []
};

export default handleActions({
    [action.getCategories.request]: (state, action) => {
        return { ...state };
    },
    [action.getCategories.success]: (state, action) => {
        return { ...state, categories: action.payload.data};
    },
    [action.getCategories.failure]: (state, action) => {
        return { ...state, categories: initialState.categories };
    },
}, initialState);


