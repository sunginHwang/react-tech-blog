import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const isProd = process.env.NODE_ENV === 'production';

export function initializeStore(initialState) {

};

const initStore = initialState => {
    console.log("=======INIT_STORE_IN=====");
    console.log("=======INIT_STORE_OUT=====");
    const sagaMiddleware = createSagaMiddleware();

    const middleware = isProd ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware));

    const store = createStore(reducers, initialState ,middleware);
    sagaMiddleware.run(rootSaga);
    return store;
}

export default initStore

