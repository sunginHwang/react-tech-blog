import UserImg from '../../../../component/user/UserImg/UserImg';
import style from './PostSubTitle.scss';
import React from "react";

export default ({
                    author,
                    categoryLabel,
                    onClickPostModify,
                    onClickDeletePost,
                    createdAt
                }) =>
            <div className={style.subTitleArea}>
                <span className={style.author}>
                    <UserImg
                        img='http://www.woolta.com:81/uploads/addebc73bb618a35adf529283cf78ce7.png'/>
                </span>
                <span>{author}</span><span className={style.separator}> | </span>
                <span>{categoryLabel}</span><span className={style.separator}> | </span>
                <span>{createdAt}</span>
                <div className={style.eventButton}
                     onClick={()=>{onClickPostModify();}}>
                    수정
                </div>
                <div className={style.eventButton}
                     onClick={()=>{onClickDeletePost();}}>
                    삭제
                </div>
            </div>


