import { fork, all } from 'redux-saga/effects';

// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index).*.js$/);

const sagas = [];

req.keys().forEach((key) => {
    sagas.push(req(key).default);
});

export default function* rootSaga() {
    yield all(
        sagas.map(saga=>fork(saga))
    )
}
