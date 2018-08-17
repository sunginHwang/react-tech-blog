import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import style from './PostContent.scss';

export default ({
                    content,
                    title,
                    author,
                    createdAt
                }) =>
    <div className={style.contentWrapper}>
        <div className={style.titleArea}>
            <h1 className={style.title}>
                {title}
            </h1>
            <div className={style.subTitleArea}>
                <img className={style.author} src="http://www.woolta.com:81/uploads/addebc73bb618a35adf529283cf78ce7.png"/>
                <span>{author}</span>
                <span> / </span>
                <span>{createdAt}</span>
            </div>
        </div>
        <div className={style.contentArea}>
            <MarkDownView content={content}
                          skipHtml={true}
                          escapeHtml={false}/>
        </div>

    </div>

