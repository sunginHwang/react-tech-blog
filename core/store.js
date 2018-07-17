import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

export function initializeStore (initialState ) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(
                sagaMiddleware
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};