import React from "react";
import PostItem from '../PostItem/PostItem';

import style from './PostLayout.scss';

const PostLayout = ({ posts,
                        onClickDetailPage
}) => {
    const list = posts.map((post) => {
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
       <div className={style.contentList}>
           {list}
       </div>
    );
};

export default PostLayout;


