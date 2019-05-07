import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import WithHeader from '../hoc/WithHeader';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import * as postsAction from "../core/actions/Post/PostsAction";
import {goPostDetailPage} from '../core/util/RouteUtil';

class postList extends Component {

    static async getInitialProps({query: {categoryNo}, store, isServer}) {
        await store.execSagaTasks(isServer, dispatch => {
            isServer && dispatch(postsAction.getPosts(categoryNo))
        });

        return {categoryNo}
    }

    async componentDidMount() {
        const {postsAction, categoryNo, posts} = this.props;
        const isClientRendering = await posts.length === 0;

        isClientRendering && await postsAction.getPosts(categoryNo);
        await this.changeHeaderTitle();
    }

    async componentDidUpdate(prevProps, prevState) {

        if (prevProps.categoryNo !== this.props.categoryNo) {
            const {postsAction, categoryNo} = this.props;
            await postsAction.getPosts(categoryNo);
            await this.changeHeaderTitle();
        }
    }

    changeHeaderTitle = () => {
        const {categoryNo, withSetHeaderTitle} = this.props;
        const headerTitle = this.getCategoryNameByCategoryNo(categoryNo);
        withSetHeaderTitle(headerTitle);
    };

    getCategoryNameByCategoryNo = (categoryNo) => {
        const category = this.props.categories.find((c) => c.value == categoryNo);
        return category !== undefined ? category.label : '';
    };


    render() {
        const { posts } = this.props;
        return (
            <PostLayout
                onClickDetailPage={goPostDetailPage}
                posts={posts}/>
        )
    }
}

export default WithHeader(connect(
    (state) => ({
        posts: state.PostListReducer.postList,
        categories: state.CategoryReducer.categories
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(postList));
