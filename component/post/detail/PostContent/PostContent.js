import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import UserImg from '../../../../component/user/UserImg/UserImg';
import style from './PostContent.scss';

export default ({
                    content,
                    title,
                    author,
                    categoryLabel,
                    clickPostModify,
                    deletePost,
                    createdAt
                }) =>
    <div className={style.contentWrapper}>
        <div className={style.titleArea}>
            <h1 className={style.title}>
                {title}
            </h1>
            <div className={style.subTitleArea}>
                <span className={style.author}>
                    <UserImg
                        img='http://www.woolta.com:81/uploads/addebc73bb618a35adf529283cf78ce7.png'/>
                </span>

                <span>{author}</span>
                <span className={style.seperator}> | </span>
                <span className={style.categoryLabel}>{categoryLabel}</span>
                <span className={style.seperator}> | </span>
                <span>{createdAt}</span>
                <div className={style.eventButton}
                    onClick={()=>{clickPostModify();}}>
                    수정
                </div>
                <div className={style.eventButton}
                     onClick={()=>{deletePost();}}>
                    삭제
                </div>
            </div>
        </div>
        <div className={style.contentArea}>
            <MarkDownView content={content}
                          skipHtml={true}
                          escapeHtml={false}/>
        </div>

    </div>

