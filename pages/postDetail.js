import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import PostContent from '../component/post/detail/PostContent/PostContent';
import PostSeoHeader from '../component/post/detail/PostSeoHeader/PostSeoHeader';

import * as postViewAction from "../core/actions/Post/PostViewAction";

class postDetail extends Component {


    static async getInitialProps({query: {categoryNo, postNo}, store, isServer}) {
        await store.execSagaTasks(isServer, dispatch => {
            isServer && dispatch(postViewAction.getPostInfo({postNo, categoryNo}))
        });

        return {categoryNo, postNo}
    }

    componentDidMount() {
        this.handleScrollTop();
        const {postNo, postViewAction, categoryNo, post} = this.props;
        const isClientRendering = post.postNo === 0;
        isClientRendering && postViewAction.getPostInfo({postNo, categoryNo});
    }

    componentDidUpdate(prevProps, prevState) {
        const {postNo, postViewAction, categoryNo, post, withSetHeaderTitle} = this.props;
        const isUpdatePostInfo = categoryNo !== prevProps.categoryNo && postNo !== prevProps.postNo;
        const isChangePostTitle = post.title !== prevProps.post.title;

        isUpdatePostInfo && postViewAction.getPostInfo({postNo, categoryNo});
        isChangePostTitle && withSetHeaderTitle(post.title);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.props.postViewAction.postInfoInitialize();
    }

    /*스크롤 초기화*/
    handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    /*게시글 수정*/
    onClickPostModify = () => {
        const {postViewAction, post, categories} = this.props;
        const {postNo, title, content, categoryLabel} = post;

        const category = categories.find((c) => c.label === categoryLabel);

        postViewAction.modifyPost({
            postNo: postNo,
            title: title,
            content: content,
            category: category
        });

    };

    /*게시글 삭제*/
    onClickDeletePost = () => {

        const {postViewAction, post, categories} = this.props;
        const {postNo, categoryLabel} = post;

        const category = categories.find((c) => c.label === categoryLabel);

        const deleteData = {
            postNo: postNo,
            categoryNo: category.value
        };

        postViewAction.deletePost(deleteData);
    };




    render() {
        const {post, authInfo, categoryNo, postNo} = this.props;
        const isPostingUser = authInfo.no === post.writer.no;

        if(post.postNo === 0) return  null;

        return (
            <div>
                <PostSeoHeader
                    title={post.title}
                    content={post.content}
                    postNo={postNo}
                    categoryNo={categoryNo}/>
                <PostContent
                    post={post}
                    editAuth={isPostingUser}
                    categoryLabel={post.categoryLabel}
                    onClickPostModify={this.onClickPostModify}
                    onClickDeletePost={this.onClickDeletePost}
                    createdAt={post.createdAt}/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        authInfo: state.AuthReducer.authInfo,
        post: state.PostInfoReducer.post,
        categories: state.CategoryReducer.categories
    }),
    (dispatch) => ({
        postViewAction: bindActionCreators(postViewAction, dispatch),
    })
)(postDetail);
