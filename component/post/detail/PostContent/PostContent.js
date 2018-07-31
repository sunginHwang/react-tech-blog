import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import style from './PostContent.scss';

export default ({
                    content,
                    title
                }) =>
    <div className={style.contentWrapper}>
        <div className={style.titleArea}>
            <h1 className={style.title}>
                {title}
            </h1>
            <div className={style.subTitleArea}>
                <img className={style.author} src="http://www.woolta.com:81/uploads/addebc73bb618a35adf529283cf78ce7.png"/>
                <span>황성인</span>
                <span> / </span>
                <span>2018. 05. 27</span>
            </div>
        </div>
        <MarkDownView content={content}
                      skipHtml={true}
                      escapeHtml={false}/>
    </div>

