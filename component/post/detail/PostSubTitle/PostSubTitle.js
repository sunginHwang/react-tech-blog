import UserImg from '../../../../component/user/UserImg/UserImg';
import cn from './PostSubTitle.scss';
import React from "react";

export default ({
                    writerName,
                    writerImg,
                    categoryLabel,
                    editAuth,
                    onClickPostModify,
                    onClickDeletePost,
                    createdAt
                }) => {
    const editPost = editAuth &&
        <div className={cn.rightArea}>
            <div className={cn.eventButton}
                 onClick={() => {
                     onClickPostModify();
                 }}>
                수정
            </div>
            <div className={cn.eventButton}
                 onClick={() => {
                     onClickDeletePost();
                 }}>
                삭제
            </div>
        </div>;

    return (
        <div className={cn.subTitleArea}>
               <span className={cn.author}><UserImg img={writerImg}/></span>
               <span>{writerName}</span><span className={cn.separator}> | </span>
               <span>{categoryLabel}</span><span className={cn.separator}> | </span>
               <span>{createdAt}</span>
            {editPost}
        </div>
    )
};



