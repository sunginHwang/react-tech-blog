import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import PostSubTitle from '../PostSubTitle/PostSubTitle';
import style from './PostContent.scss';
import React from "react";

export default ({
                    content,
                    title,
                    author,
                    categoryLabel,
                    editAuth,
                    onClickPostModify,
                    onClickDeletePost,
                    createdAt
                }) =>
    <div className={style.contentWrapper}>
        <div className={style.titleArea}>
            <h1 className={style.title}>
                {title}
            </h1>
            <PostSubTitle
                author={author}
                categoryLabel={categoryLabel}
                createdAt={createdAt}
                editAuth{editAuth}
                onClickPostModify={onClickPostModify}
                onClickDeletePost={onClickDeletePost}
            />
        </div>
        <div className={style.contentArea}>
            <MarkDownView content={content}
                          skipHtml={false}
                          escapeHtml={false}/>
        </div>
    </div>

