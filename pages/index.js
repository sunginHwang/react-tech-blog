import React, { Component } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IntroPage from '../component/main/IntroPage/IntroPage';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import * as postsAction from "../core/actions/Post/PostsAction";
import { goPostDetailPage } from '../core/util/RouteUtil';
import WithHeader from "../hoc/WithHeader";


class mainPage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.onLoadRecentPostList();
    }

    onLoadRecentPostList =  () => {
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