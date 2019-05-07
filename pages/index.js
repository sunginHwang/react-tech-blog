import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IntroPage from '../component/main/IntroPage/IntroPage';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import * as postsAction from "../core/actions/Post/PostsAction";
import {goPostDetailPage} from '../core/util/RouteUtil';
import WithHeader from "../hoc/WithHeader";

class mainPage extends Component {

    static async getInitialProps({store, isServer}) {
        await console.log('mainPage');
        await store.execSagaTasks(isServer, dispatch => {
            dispatch(postsAction.getRecentPosts());
        });
    }


    componentDidMount() {
        this.onLoadRecentPostList()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.postList);
        console.log(prevProps.postList);
        console.log(this.props.postList == prevProps.postList);
    }

    onLoadRecentPostList = () => {
        this.props.postList.length === 0 &&
        this.props.postsAction.getRecentPosts();
    };

    render() {
        const {postList} = this.props;

        return (
            <div>
                <IntroPage/>
                <PostLayout
                    onClickDetailPage={goPostDetailPage}
                    posts={postList}/>
            </div>

        )
    }
}

export default WithHeader(connect(
    (state) => ({
        postList: state.PostListReducer.postList
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(mainPage));
