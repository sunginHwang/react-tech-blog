import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IntroPage from '../component/main/IntroPage/IntroPage';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import * as postsAction from "../store/actions/post/PostsAction";
import {goPostDetailPage} from '../core/util/RouteUtil';
import WithHeader from "../hoc/WithHeader";
import PostsPlaceHolder from "../component/post/list/PostsPlaceHolder/PostsPlaceHolder";

class mainPage extends Component {

    static async getInitialProps({store, isServer}) {
        await store.execSagaTasks(isServer, dispatch => {
            isServer && dispatch(postsAction.getRecentPosts());
        });

        return {isServer}
    }


    componentDidMount() {
        !this.props.isServer && this.onLoadRecentPostList()
    }

    shouldComponentUpdate(nextProps, nextState) {
        const isChangePosts = JSON.stringify(this.props.posts) !== JSON.stringify(nextProps.posts);
        return isChangePosts;
    }

    onLoadRecentPostList = () => {
        this.props.postsAction.getRecentPosts();
    };

    render() {
        const { posts, loading } = this.props;

        const newPosts = loading
            ? <PostsPlaceHolder/>
            : <PostLayout
                onClickDetailPage={goPostDetailPage}
                posts={posts}/>;

        return (
            <div>
                <IntroPage/>
                {newPosts}
            </div>

        )
    }
}

export default WithHeader(connect(
    (state) => ({
        posts: state.PostsReducer.posts,
        loading: state.PostsReducer.loading,
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(mainPage));
