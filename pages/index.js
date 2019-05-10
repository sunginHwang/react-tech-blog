import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IntroPage from '../component/main/IntroPage/IntroPage';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import * as postsAction from "../core/actions/post/PostsAction";
import {goPostDetailPage} from '../core/util/RouteUtil';
import WithHeader from "../hoc/WithHeader";

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
        const {posts} = this.props;

        return (
            <div>
                <IntroPage/>
                <PostLayout
                    onClickDetailPage={goPostDetailPage}
                    posts={posts}/>
            </div>

        )
    }
}

export default WithHeader(connect(
    (state) => ({
        posts: state.PostsReducer.posts
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(mainPage));
