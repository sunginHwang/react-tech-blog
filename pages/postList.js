import React from "react";

import PostLayout from '../component/post/list/PostLayout/PostLayout';

import * as blogAction from "../core/actions/BlogAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Router from "next/router";

class postList extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const {categoryNo} = this.props;
        this.loadPostList(categoryNo);
    }

    componentDidUpdate(prevProps, prevState) {
        const {categoryNo} = this.props;
        this.loadPostList(categoryNo);
    }

    loadPostList = async (categoryNo) => {
        const {blogAction} = this.props;
        try {
            await blogAction.getPosts(categoryNo);
        } catch (e) {
            await console.log(e);
            await alert('해당 카테고리 분류의 글을 가져올 수 없습니다.');
        }
    };

    onClickDetailPage = (postNo) => {
        const {categoryNo} = this.props;
        //Router.push(`/categories/${categoryNo}/posts/${postNo}/`,`${categoryNo}/posts/${postNo}`);
        Router.push(`/postDetail?postNo=${postNo}&categoryNo=${categoryNo}`, `/postDetail?postNo=${postNo}&categoryNo=${categoryNo}`)
    };

    static getInitialProps({query: {categoryNo}}) {
        return {categoryNo}
    }

    render() {
        const {postList} = this.props;

        return (
                <PostLayout
                    clickDetailPage={this.onClickDetailPage}
                    posts={postList}/>
        )
    }
}

export default connect(
    (state) => ({
        postList: state.PostListReducer.postList
    }),
    (dispatch) => ({
        blogAction: bindActionCreators(blogAction, dispatch)
    })
)(postList);