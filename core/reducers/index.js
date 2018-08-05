import { combineReducers } from 'redux';
import { ReduxSagaExampleReducer } from './ReduxSagaExample';
import { PostListReducer } from './PostList';
import { PostInfoReducer } from './PostInfo';


export default combineReducers({
    ReduxSagaExampleReducer,
    PostListReducer,
    PostInfoReducer
});