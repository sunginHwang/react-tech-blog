import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import WithHeader from '../hoc/WithHeader';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import PostsPlaceHolder from '../component/post/list/PostsPlaceHolder/PostsPlaceHolder';

import PlaceHolderBar from '../component/common/placeHolder/PlaceHolderBar/PlaceHolderBar';
import * as postsAction from "../core/actions/post/PostsAction";
import {goPostDetailPage} from '../core/util/RouteUtil';

class posts extends Component {

    static async getInitialProps({query: {categoryNo}, store, isServer}) {
        await store.execSagaTasks(isServer, dispatch => {
            isServer && dispatch(postsAction.getPosts(categoryNo))
        });

        return {categoryNo, isServer}
    }

    async componentDidMount() {
        const {postsAction, categoryNo, isServer} = this.props;
        !isServer && await postsAction.getPosts(categoryNo);
         await this.changeHeaderTitle();
    }

    async componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.categoryNo);
        console.log(this.props.categoryNo);
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

        return <PostsPlaceHolder/>
       /* return (
            <PostLayout
                onClickDetailPage={goPostDetailPage}
                posts={posts}/>
        )*/
    }
}

export default WithHeader(connect(
    (state) => ({
        posts: state.PostsReducer.posts,
        categories: state.CategoryReducer.categories
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(posts));
