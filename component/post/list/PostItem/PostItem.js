import style from './PostItem.scss';
import React from "react";

export default ({
                    title,
                    postNo,
                    contents,
                    author,
                    date,
                    clickDetailPage
                }) =>
    <div className={style.postItem}>
        <h1 className={style.title} onClick={()=>{clickDetailPage(postNo)}}>{title}</h1>
        <p className={style.content} onClick={()=>{clickDetailPage(postNo)}}>{contents}</p>
        <div>
            <span className={style.meta}>{author}</span>
            <span className={style.meta}>/</span>
            <span className={style.meta}>{date}</span>
        </div>
    </div>
