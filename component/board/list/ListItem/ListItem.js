import style from './ListItem.scss';

export default ({
                    title,
                    contents,
                    author,
                    date
                }) =>
    <div className={style.listItem}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.content}>{contents}</p>
        <div>
            <span className={style.meta}>{author}</span>
            <span className={style.meta}>/</span>
            <span className={style.meta}>{date}</span>
        </div>
    </div>

