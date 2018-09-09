import UserImg from '../../../../component/user/UserImg/UserImg';
import style from './PostSubTitle.scss';
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
        <div className={style.rightArea}>
            <div className={style.eventButton}
                 onClick={() => {
                     onClickPostModify();
                 }}>
                수정
            </div>
            <div className={style.eventButton}
                 onClick={() => {
                     onClickDeletePost();
                 }}>
                삭제
            </div>
        </div>;

    return (
        <div className={style.subTitleArea}>
           <div className={style.leftArea}>
               <span className={style.author}><UserImg img={writerImg}/></span>
               <span>{writerName}</span><span className={style.separator}> | </span>
               <span>{categoryLabel}</span><span className={style.separator}> | </span>
               <span>{createdAt}</span>
           </div>
            {editPost}
        </div>
    )
};



