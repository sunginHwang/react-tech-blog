import React, { Component } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import PostContent from '../component/post/detail/PostContent/PostContent';
import WithHeader from '../hoc/WithHeader';
import * as postViewAction from "../core/actions/Post/PostViewAction";
import * as BlogApi from '../core/apis/BlogApi';


class postDetail extends Component {




    componentDidMount() {
        console.log('update');
     /*   this.handleScrollTop();
        const { postNo, postViewAction, categoryNo } = this.props;
        postViewAction.getPostInfo({postNo, categoryNo});*/

    }

    static async getInitialProps({query: {categoryNo, postNo}, store}) {
    //    await store.dispatch(await postViewAction.TestGet({postNo, categoryNo}));
    //    await console.log(store.getState());
        const res = await BlogApi.getPostInfo({categoryNo, postNo});
        const postTest = res.data.data;
        return {categoryNo, postNo, postTest}
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleScrollTop();
        if(prevProps.post.title !== this.props.post.title){
         //   this.props.withSetHeaderTitle(this.props.post.title);
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



    render() {
        const { post, authInfo, postTest } = this.props;
        
        const isPostingUser = authInfo.no === postTest.writer.no;
        return (
            <div>
                <h2>
                    POST_DETAIL
                </h2>
                { postTest.postNo !== 0 &&
                <PostContent
                    post={postTest}
                    editAuth={isPostingUser}
                    categoryLabel={postTest.categoryLabel}
                    onClickPostModify={this.onClickPostModify}
                    onClickDeletePost={this.onClickDeletePost}
                    createdAt={postTest.createdAt}/>
                }
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
