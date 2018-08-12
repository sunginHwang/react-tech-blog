import {  handleActions } from 'redux-actions';
import * as ACTION from '../actions/SampleApi';

const initialState = {
    count: 0,
    status: '',
    title: '',
    body: ''
};

export const ReduxSagaExampleReducer =  handleActions({
    [ACTION.asyncCall.request]: (state, payload) => {
        return { ...state, status: 'request', count:100 };
    },
    [ACTION.asyncCall.success]: (state, payload) => {
        return { ...state, status: 'success',count: 200, body:payload.payload.data.body, title: payload.payload.data.title };
    },
    [ACTION.asyncCall.failure]: (state, payload) => {
        return { ...state, status: 'fail', count:404, body:'', title: '' };
    },
}, initialState);


