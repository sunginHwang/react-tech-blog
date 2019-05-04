import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Helmet from 'react-helmet';

import PostContent from '../component/post/detail/PostContent/PostContent';
import WithHeader from '../hoc/WithHeader';
import * as postViewAction from "../core/actions/Post/PostViewAction";
import {goPostDetailPage} from '../core/util/RouteUtil';

class postDetail extends Component {

    constructor(props) {
        super(props)
    }

    static async getInitialProps({query: {categoryNo, postNo}, store, isServer}) {
        await console.log(`getInitialProps. isServer: ${isServer}`);
        await store.execSagaTasks(isServer, dispatch => {
            dispatch(postViewAction.getPostInfo({postNo, categoryNo}))
        });

        return {categoryNo, postNo}
    }

    componentDidMount() {
        this.handleScrollTop();
        const {postNo, postViewAction, categoryNo, post} = this.props;
        console.log('componentDidMount');
        if (post.postNo === 0) {
            postViewAction.getPostInfo({postNo, categoryNo});
        }

    }

    componentDidUpdate(prevProps, prevState) {
        const {postNo, postViewAction, categoryNo, post} = this.props;
        const isUpdatePostInfo = categoryNo !== prevProps.categoryNo && postNo !== prevProps.postNo;

        if (isUpdatePostInfo) {
            postViewAction.getPostInfo({postNo, categoryNo});
        }

        if(post.title !== prevProps.post.title){
            this.props.withSetHeaderTitle(post.title);
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

    convertToPlainText = markdown => {
        if (!markdown) return '';
        return markdown.replace(/\n/g, ' ').replace(/```(.*)```/g, '').replace('#','');
    }


    render() {
        const {post, authInfo, categoryNo, postNo} = this.props;
        const isPostingUser = authInfo.no === post.writer.no;
        const url = `https://blog.woolta.com/categories/${categoryNo}/posts/${postNo}`;
        const thumbnail = `https://image.woolta.com/3fed2d102ca753c6.png`;
        return (
            <div>
                <Helmet>
                    <title>{post.title}</title>
                    <meta name="description" content={this.convertToPlainText(post.content)} />
                    <link rel="canonical" href={url} />
                    <meta property="og:url" content={url} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={post.title} />
                    <meta property="og:description" content={this.convertToPlainText(post.content)} />
                    {thumbnail && <meta property="og:image" content={thumbnail} />}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={post.title} />
                    <meta name="twitter:description" content={this.convertToPlainText(post.content)} />
                    {thumbnail && <meta name="twitter:image" content={thumbnail} />}
                </Helmet>
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
