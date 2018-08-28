import {handleActions} from 'redux-actions';
import * as action from '../actions/User/UserAction';

const initialState = {
    id: '',
    password: '',

    authInfo: {
        no: 0,
        userId: '',
        imageUrl: '',
        authToken: ''
    },

};

export const AuthReducer = handleActions({
    [action.changeLoginInputInfo]: (state, action) => {
        const {type, value} = action.payload;
        if (type === 'id') {
            return {...state, id: value};
        } else if (type === 'password') {
            return {...state, password: value};
        }

    },
    [action.login.request]: (state, result) => {
        return {...state};
    },
    [action.login.success]: (state, result) => {
        return {...state, authInfo: result.payload.data.data};
    },
    [action.login.failure]: (state, result) => {
        return {...state, authInfo: initialState.authInfo};
    },
    [action.loadAuthInfo.request]: (state, result) => {
        return {...state};
    },
    [action.loadAuthInfo.success]: (state, result) => {
        return {...state, authInfo: result.payload.data.data};
    },
    [action.loadAuthInfo.failure]: (state, result) => {
        return {...state, authInfo: initialState.authInfo};
    },
}, initialState);


