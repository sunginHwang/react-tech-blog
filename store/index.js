import {createStore, applyMiddleware} from 'redux/index';
// import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware,  { END }  from 'redux-saga/index';
import reducers from './reducers';
import rootSaga from './sagas';

const isProd = process.env.NODE_ENV === 'production';

const initStore = initialState => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware =  applyMiddleware(sagaMiddleware);

   /* const middleware = isProd ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware));*/

    const store = createStore(reducers, initialState ,middleware);

    store.runSaga = () => {
        // Avoid running twice
        if (store.saga) return;
        store.saga = sagaMiddleware.run(rootSaga);
    };

    store.stopSaga = async () => {
        // Avoid running twice
        if (!store.saga) return;
        store.dispatch(END);
        await store.saga.done;
        store.saga = null;
    };

    store.execSagaTasks = async (isServer, tasks) => {
        // run saga
        store.runSaga();
        // dispatch saga tasks
        tasks(store.dispatch);
        // Stop running and wait for the tasks to be done
        await store.stopSaga();
        // Re-run on client side
        if (!isServer) {
            store.runSaga();
        }
    };

    // Initial run
    store.runSaga();

    return store;
}

export default initStore

