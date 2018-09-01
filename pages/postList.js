import React from "react";

import PostLayout from '../component/post/list/PostLayout/PostLayout';

import * as postsAction from "../core/actions/Post/PostsAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Router from "next/router";

class postList extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const {categoryNo} = this.props;
        this.onLoadPostList(categoryNo);
    }

    componentDidUpdate(prevProps, prevState) {
        const {categoryNo} = this.props;

        if(prevProps.categoryNo !== categoryNo){
            this.onLoadPostList(categoryNo);
        }

    }

    onLoadPostList = async (categoryNo) => {
        await this.props.postsAction.getPosts(categoryNo);
    };

    onClickDetailPage = (postNo) => {
        const {categoryNo} = this.props;
        Router.push(`/postDetail?postNo=${postNo}&categoryNo=${categoryNo}`, `/categories/${categoryNo}/posts/${postNo}`)
    };

    static getInitialProps({query: {categoryNo}}) {
        return {categoryNo}
    }

    render() {
        const {postList} = this.props;

        return (
                <PostLayout
                    onClickDetailPage={this.onClickDetailPage}
                    posts={postList}/>
        )
    }
}

export default connect(
    (state) => ({
        postList: state.PostListReducer.postList
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(postList);