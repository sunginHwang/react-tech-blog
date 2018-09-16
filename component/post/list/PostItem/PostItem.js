import React, {Component} from "react";
import classNames from 'classnames/bind';
import cn from './PostItem.scss';
const cx = classNames.bind(cn);


class PostItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        const isUpdate = this.props.title !== nextProps.title && this.props.content !== nextProps.content;
        return isUpdate
    }

    render() {
        const { title, postNo, contents, author, date,
            categoryNo, categoryLabel, clickDetailPage } = this.props;
        return (
            <div className={cn.postItem}>
                <h1 className={cn.title} onClick={()=>{clickDetailPage(categoryNo, postNo)}}>{title}</h1>
                <p className={cn.content} onClick={()=>{clickDetailPage(categoryNo, postNo)}}>{contents}</p>
                <div>
                    <span className={cx(cn.meta,cn.categoryLabel)} >{categoryLabel}</span>
                    <span className={cn.separator}>|</span>
                    <span className={cn.meta}>{author}</span>
                    <span className={cn.separator}>|</span>
                    <span className={cn.meta}>{date}</span>
                </div>
            </div>
        )
    }
}
export default PostItem;

