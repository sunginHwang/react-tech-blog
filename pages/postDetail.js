import React from "react";
import PostContent from '../component/post/detail/PostContent/PostContent';

import * as postViewAction from "../core/actions/Post/PostViewAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class postDetail extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(){
        const { postNo, postViewAction, categoryNo } = this.props;
        this.handleScrollTop();
        postViewAction.getPostInfo({postNo, categoryNo});
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleScrollTop();
    }

    componentWillUnmount(){
        this.props.postViewAction.postInfoInitialize();
    }

    handleScrollTop = () =>{
        window.scrollTo(0,0);
    };

    static getInitialProps ({query: {categoryNo, postNo}}) {
        return {categoryNo, postNo}
    }

    render () {
        const { post } = this.props;
        return (
            <div>
                {post.postNo != 0 &&
                <PostContent
                    title={post.title}
                    author={post.author}
                    content={post.content}
                    categoryLabel={post.categoryLabel}
                    createdAt={post.createdAt}/>
            }
            </div>
        )
    }
}

export default connect(
    (state) => ({
        post: state.PostInfoReducer.post
    }),
    (dispatch) => ({
        postViewAction: bindActionCreators(postViewAction, dispatch)
    })
)(postDetail);