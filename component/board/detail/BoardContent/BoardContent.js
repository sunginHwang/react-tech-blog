import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import style from './BoardContent.scss';

export default ({
                    contents,
                    title
                }) =>
    <div className={style.boardContentWrapper}>
        <div className={style.BoardTitleArea}>
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
        <MarkDownView content={contents+contents+contents+contents}
                      skipHtml={true}
                      escapeHtml={false}/>
    </div>

