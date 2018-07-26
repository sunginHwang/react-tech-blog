import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import style from './BoardContent.scss';

export default ({
                    contents,
                    title
                }) =>
    <div className={style.boardContentWrapper}>
        <div>
            <h2>{title}</h2>
        </div>
        <MarkDownView content={contents}
                      skipHtml={true}
                      escapeHtml={false}/>
    </div>

