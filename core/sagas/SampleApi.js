import {call, all, takeLatest } from "redux-saga/effects";
import * as SampleApiAction from "../actions/SampleApi";
import { asyncSaga } from '../util/reduxUtil';
import * as SampleAPI  from '../apis/SampleApi';

function * asyncRequestSaga(info) {
    yield call(asyncSaga,SampleApiAction.asyncCall,SampleAPI.getPostAPI, info.payload);
}

export default function* root() {
    yield all([
        takeLatest(SampleApiAction.ASYNC.INDEX, asyncRequestSaga) // asyncCall
    ]);
}