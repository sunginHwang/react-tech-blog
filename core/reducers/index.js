import { combineReducers } from 'redux';
import { PostListReducer } from './PostList';
import { PostInfoReducer } from './PostInfo';
import { PostWriteReducer } from './PostWrite';
import { CategoryReducer} from "./Category";
import { LayoutReducer } from './Layout';
import { AuthReducer } from './Auth';


export default combineReducers({
    PostListReducer,
    PostInfoReducer,
    PostWriteReducer,
    CategoryReducer,
    LayoutReducer,
    AuthReducer
});