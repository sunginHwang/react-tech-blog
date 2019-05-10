import React, {Component} from "react";
import PostItem from '../PostItem/PostItem';
import cn from './PostLayout.scss';

class PostLayout extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.posts !== nextProps.posts;
    }

    render() {
        const { posts, onClickDetailPage } = this.props;

        const postItems = posts.map((post) => {
            return <PostItem
                clickDetailPage={onClickDetailPage}
                postNo={post.postNo}
                key={post.postNo}
                title={post.title}
                contents={post.subDescription}
                categoryLabel={post.categoryLabel}
                categoryNo={post.categoryNo}
                author={post.author}
                date={post.createdAt}/>
        });
        return (
            <div className={cn.contentList}>
                {postItems}
            </div>
        );

    }
}

export default PostLayout;


