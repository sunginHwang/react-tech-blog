import { handleActions } from 'redux-actions';
import * as action from '../actions/User/UserAction';

const initialState = {
    authInfo:{
        userId: '',
        imageUrl:'',
        authToken: ''
    },

};

export const AuthReducer =  handleActions({
    [action.login.request]: (state, payload) => {
        return { ...state };
    },
    [action.login.success]: (state, result) => {
        return { ...state, authInfo: result.payload.data.data};
    },
    [action.login.failure]: (state, payload) => {
        return { ...state, authInfo: initialState.authInfo };
    },
}, initialState);


