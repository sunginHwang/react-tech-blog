import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import PostContent from '../component/post/detail/PostContent/PostContent';
import PostSeoHeader from '../component/post/detail/PostSeoHeader/PostSeoHeader';

import * as PostAction from "../core/actions/post/PostAction";

class post extends Component {


    static async getInitialProps({query: {categoryNo, postNo}, store, isServer}) {
        await store.execSagaTasks(isServer, dispatch => {
            isServer && dispatch(PostAction.getPost({postNo, categoryNo}))
        });

        return {categoryNo, postNo, isServer}
    }

    componentDidMount() {
        const {postNo, PostAction, categoryNo, isServer} = this.props;
        !isServer && PostAction.getPost({postNo, categoryNo});
    }

    componentDidUpdate(prevProps, prevState) {
        const {postNo, PostAction, categoryNo} = this.props;
        const isUpdatePostInfo = categoryNo !== prevProps.categoryNo && postNo !== prevProps.postNo;

        isUpdatePostInfo && PostAction.getPost({postNo, categoryNo});
    }

    componentWillUnmount() {
        this.props.PostAction.postInfoInitialize();
    }


    /*게시글 수정*/
    onClickPostModify = () => {
        const {PostAction, post, categories} = this.props;
        const {postNo, title, content, categoryLabel} = post;

        const category = categories.find((c) => c.label === categoryLabel);

        PostAction.modifyPost({
            postNo: postNo,
            title: title,
            content: content,
            category: category
        });

    };

    /*게시글 삭제*/
    onClickDeletePost = () => {

        const {PostAction, post, categories} = this.props;
        const {postNo, categoryLabel} = post;

        const category = categories.find((c) => c.label === categoryLabel);

        const deleteData = {
            postNo: postNo,
            categoryNo: category.value
        };

        PostAction.deletePost(deleteData);
    };


    render() {
        const {post, authInfo, categoryNo, postNo} = this.props;
        const { onClickPostModify, onClickDeletePost } = this;
        const isPostingUser = authInfo.no === post.writer.no;

        if (post.postNo === 0) return null;

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
                    onClickPostModify={onClickPostModify}
                    onClickDeletePost={onClickDeletePost}
                    createdAt={post.createdAt}/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        authInfo: state.AuthReducer.authInfo,
        post: state.PostReducer.post,
        categories: state.CategoryReducer.categories
    }),
    (dispatch) => ({
        PostAction: bindActionCreators(PostAction, dispatch),
    })
)(post);
