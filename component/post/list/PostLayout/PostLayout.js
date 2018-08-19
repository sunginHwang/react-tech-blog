import React from "react";
import PostItem from '../PostItem/PostItem';

import style from './PostLayout.scss';

const PostLayout = ({ posts,
                    clickDetailPage
}) => {
    const list = posts.map((post) => {
        return <PostItem
                  clickDetailPage={clickDetailPage}
                  postNo={post.postNo}
                  key={post.postNo}
                  title={post.title}
                  contents={post.subDescription}
                  categoryLabel={post.categoryLabel}
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


