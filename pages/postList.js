import React, { Component } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import WithHeader from '../hoc/WithHeader';
import PostLayout from '../component/post/list/PostLayout/PostLayout';
import * as postsAction from "../core/actions/Post/PostsAction";
import { goPostDetailPage } from '../core/util/RouteUtil';


class postList extends Component {

    componentDidMount() {
        console.log('what');
        this.onLoadPostList();
    }

    componentDidUpdate(prevProps, prevState) {

        this.changeHeaderTitle();
        console.log(prevProps.categoryNo);
        console.log(this.props.categoryNo);
        if(prevProps.categoryNo !== this.props.categoryNo){
            this.onLoadPostList();
        }

    }

    onLoadPostList = async () => {
        const { postsAction , categoryNo } = this.props;
        await this.props.postsAction.getPosts(categoryNo);
        await this.changeHeaderTitle();
    };

    changeHeaderTitle= () => {
        const { categoryNo, withSetHeaderTitle} = this.props;
        const headerTitle =  this.getCategoryNameByCategoryNo(categoryNo);
        withSetHeaderTitle(headerTitle);
    };

    getCategoryNameByCategoryNo = (categoryNo) => {
        const category = this.props.categories.find((c) => c.value == categoryNo);
        return category !== undefined ? category.label : '';
    };

    static getInitialProps({query: {categoryNo}}) {
        return {categoryNo}
    }

    render() {
        return (
                <PostLayout
                    onClickDetailPage={goPostDetailPage}
                    posts={this.props.postList}/>
        )
    }
}

export default WithHeader(connect(
    (state) => ({
        postList: state.PostListReducer.postList,
        categories: state.CategoryReducer.categories
    }),
    (dispatch) => ({
        postsAction: bindActionCreators(postsAction, dispatch)
    })
)(postList));
