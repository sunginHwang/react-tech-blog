import style from './PostItem.scss';
import React, {Component} from "react";

class PostItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        const isUpdate = this.props.title ===  nextProps.title && this.props.content === nextProps.content;
        return isUpdate
    }

    render() {
        const { title, postNo, contents, author, date,
            categoryNo, categoryLabel, clickDetailPage } = this.props;
        return (
            <div className={style.postItem}>
                <h1 className={style.title} onClick={()=>{clickDetailPage(categoryNo, postNo)}}>{title}</h1>
                <p className={style.content} onClick={()=>{clickDetailPage(categoryNo, postNo)}}>{contents}</p>
                <div>
                    <span className={style.meta +' '+ style.categoryLabel}>{categoryLabel}</span>
                    <span className={style.separator}>|</span>
                    <span className={style.meta}>{author}</span>
                    <span className={style.separator}>|</span>
                    <span className={style.meta}>{date}</span>
                </div>
            </div>
        )
    }
}
export default PostItem;

