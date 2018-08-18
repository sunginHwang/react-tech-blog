import { combineReducers } from 'redux';
import { ReduxSagaExampleReducer } from './ReduxSagaExample';
import { PostListReducer } from './PostList';
import { PostInfoReducer } from './PostInfo';
import { PostWriteReducer } from './PostWrite';
import { CategoryReducer} from "./Category";
import { LayoutReducer } from './Layout';


export default combineReducers({
    ReduxSagaExampleReducer,
    PostListReducer,
    PostInfoReducer,
    PostWriteReducer,
    CategoryReducer,
    LayoutReducer
});