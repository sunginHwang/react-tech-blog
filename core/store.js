import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const isProd = process.env.NODE_ENV === 'production';

export function initializeStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = isProd ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware));

    const store = createStore(reducers,middleware);
    sagaMiddleware.run(rootSaga);
    return store;
};