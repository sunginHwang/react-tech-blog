import React from "react";
import PostItemPlaceHolder from '../../../post/list/PostItemPlaceHolder/PostItemPlaceHolder';

import cn from './PostsPlaceHolder.scss';

export default () => {

    const postsPlaceHolder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => {
        return <PostItemPlaceHolder key={index}/>
    });

    return (
        <div className={cn.postItemPlaceHolder}>
            {
                postsPlaceHolder
            }
        </div>
    )
}

