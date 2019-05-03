import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import PostContent from '../component/post/detail/PostContent/PostContent';
import WithHeader from '../hoc/WithHeader';
import * as postViewAction from "../core/actions/Post/PostViewAction";
import {goPostDetailPage} from '../core/util/RouteUtil';

class postDetail extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.handleScrollTop();
        const {postNo, postViewAction, categoryNo, post} = this.props;
        console.log('componentDidMount');
        if (post.postNo === 0) {
            postViewAction.getPostInfo({postNo, categoryNo});
        }

    }

    static async getInitialProps({query: {categoryNo, postNo}, store, isServer}) {
        await console.log(`getInitialProps. isServer: ${isServer}`);
        await store.execSagaTasks(isServer, dispatch => {
            dispatch(postViewAction.getPostInfo({postNo, categoryNo}))
        });

        return {categoryNo, postNo}
    }


    componentDidUpdate(prevProps, prevState) {
        const {postNo, postViewAction, categoryNo, post} = this.props;
        const isUpdatePostInfo = categoryNo !== prevProps.categoryNo && postNo !== prevProps.postNo;

        if (isUpdatePostInfo) {
            this.props.withSetHeaderTitle(this.props.post.title);
            postViewAction.getPostInfo({postNo, categoryNo});
        }

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
        const {post, authInfo} = this.props;
        const isPostingUser = authInfo.no === post.writer.no;
        return (
            <div>
                <div>
                    <button onClick={() => goPostDetailPage(1, 128)}>업데이트 버튼</button>
                </div>
                {post.postNo !== 0 &&
                <PostContent
                    post={post}
                    editAuth={isPostingUser}
                    categoryLabel={post.categoryLabel}
                    onClickPostModify={this.onClickPostModify}
                    onClickDeletePost={this.onClickDeletePost}
                    createdAt={post.createdAt}/>
                }
            </div>
        )
    }
}

export default WithHeader(connect(
    (state) => ({
        authInfo: state.AuthReducer.authInfo,
        post: state.PostInfoReducer.post,
        categories: state.CategoryReducer.categories
    }),
    (dispatch) => ({
        postViewAction: bindActionCreators(postViewAction, dispatch),
    })
)(postDetail));
