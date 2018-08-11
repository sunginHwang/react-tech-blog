import React from "react";
import Layout from '../component/mainTemplate/Layout/Layout';
import PostContent from '../component/post/detail/PostContent/PostContent';

import * as blogAction from "../core/actions/BlogAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class postDetail extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(){
        const { postNo, blogAction, categoryNo } = this.props;
        console.log(this.props);
        blogAction.getPostInfo(postNo);
    }

    static getInitialProps ({query: {categoryNo, postNo}}) {
        return {categoryNo, postNo}
    }

    render () {
        const { post } = this.props;
        return (
            <Layout title={post.title}>
                <PostContent
                    title={post.title}
                    author={post.author}
                    content={post.content}
                    createdAt={post.createdAt}/>
            </Layout>
        )
    }
}

export default connect(
    (state) => ({
        post: state.PostInfoReducer.post
    }),
    (dispatch) => ({
        blogAction: bindActionCreators(blogAction, dispatch)
    })
)(postDetail);