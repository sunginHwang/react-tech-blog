import React from "react";
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
        blogAction.getPostInfo({postNo, categoryNo});
    }

    componentDidUpdate(prevProps, prevState) {
    }

    static getInitialProps ({query: {categoryNo, postNo}}) {
        return {categoryNo, postNo}
    }

    render () {
        const { post } = this.props;
        return (
            <div>
                <PostContent
                    title={post.title}
                    author={post.author}
                    content={post.content}
                    createdAt={post.createdAt}/>
            </div>
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