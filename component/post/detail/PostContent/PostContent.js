import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import PostSubTitle from '../PostSubTitle/PostSubTitle';
import cn from './PostContent.scss';
import React from "react";

export default ({
                    post,
                    categoryLabel,
                    editAuth,
                    onClickPostModify,
                    onClickDeletePost,
                    createdAt
                }) =>
    <div className={cn.contentWrapper}>
        <div className={cn.titleArea}>
            <h1 className={cn.title}>
                {post.title}
            </h1>
            <PostSubTitle
                writerName={post.writer.nickName}
                writerImg={post.writer.imageUrl}
                categoryLabel={categoryLabel}
                createdAt={createdAt}
                editAuth={editAuth}
                onClickPostModify={onClickPostModify}
                onClickDeletePost={onClickDeletePost}
            />
        </div>
        <div className={cn.contentArea}>
            <MarkDownView content={post.content}
                          skipHtml={false}
                          escapeHtml={false}/>
        </div>
    </div>

