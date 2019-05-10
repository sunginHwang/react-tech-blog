import {handleActions} from 'redux-actions';
import * as action from '../actions/UserAction';

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

export default handleActions({
    [action.changeLoginInputInfo]: (state, action) => {
        const {type, value} = action.payload;
        if (type === 'id') {
            return {...state, id: value};
        } else if (type === 'password') {
            return {...state, password: value};
        }

    },
    [action.logout]: (state, action) => {
        return {...state, authInfo: initialState.authInfo};
    },
    [action.login.request]: (state, action) => {
        return {...state};
    },
    [action.login.success]: (state, action) => {
        return {...state, authInfo: action.payload.data};
    },
    [action.login.failure]: (state, action) => {
        return {...state, authInfo: initialState.authInfo};
    },
    [action.loadAuthInfo.request]: (state, action) => {
        return {...state};
    },
    [action.loadAuthInfo.success]: (state, action) => {
        return {...state, authInfo: action.payload.data};
    },
    [action.loadAuthInfo.failure]: (state, action) => {
        return {...state, authInfo: initialState.authInfo};
    },
}, initialState);


