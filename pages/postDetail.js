import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import PostContent from '../component/post/detail/PostContent/PostContent';
import WithHeader from '../hoc/WithHeader';
import * as postViewAction from "../core/actions/Post/PostViewAction";


class postDetail extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.handleScrollTop();
        const { postNo, postViewAction, categoryNo } = this.props;
        postViewAction.getPostInfo({postNo, categoryNo});

    }

    componentDidUpdate(prevProps, prevState) {
        this.handleScrollTop();

        if(prevProps.post.title !== this.props.post.title){
            this.props.withSetHeaderTitle(this.props.post.title);
        }
    }

    componentWillUnmount() {
        this.props.postViewAction.postInfoInitialize();
    }

    /*스크롤 초기화*/
    handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    /*게시글 수정*/
    onClickPostModify = () => {
        const { postViewAction, post, categories } = this.props;
        const { postNo, title, content, categoryLabel } = post;

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

        const { postViewAction, post, categories } = this.props;
        const { postNo, categoryLabel } = post;

        const category = categories.find((c) => c.label === categoryLabel);

        const deleteData = {
            postNo: postNo,
            categoryNo: category.value
        };

        postViewAction.deletePost(deleteData);
    };

    static getInitialProps({query: {categoryNo, postNo}}) {
        return {categoryNo, postNo}
    }

    render() {
        const { post, authInfo } = this.props;
        const isPostingUser = authInfo.no === post.authorNo;
        return (
            <div>
                { post.postNo !== 0 &&
                <PostContent
                    title={post.title}
                    author={post.author}
                    content={post.content}
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