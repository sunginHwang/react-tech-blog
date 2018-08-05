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
        const { postNo, blogAction } = this.props;
        blogAction.getPostInfo(postNo);
    }

    static getInitialProps ({query: {categoryNo, postNo}}) {
        return {categoryNo, postNo}
    }

    render () {
        const { title, content } = this.props;
        return (
            <Layout title={title}>
                <PostContent
                    title={title}
                    content={content+content+content+content}/>
            </Layout>
        )
    }
}

export default connect(
    (state) => ({
        title: state.PostInfoReducer.title,
        content: state.PostInfoReducer.content
    }),
    (dispatch) => ({
        blogAction: bindActionCreators(blogAction, dispatch)
    })
)(postDetail);