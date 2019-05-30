import React, {Component} from "react";
import Link from 'next/link';

import classNames from 'classnames/bind';
import cn from './PostItem.scss';

const cx = classNames.bind(cn);


class PostItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        const isPostItemUpdate = this.props.title !== nextProps.title && this.props.content !== nextProps.content;
        return isPostItemUpdate;
    }

    render() {
        const {
            title, postNo, contents, author, date,
            categoryNo, categoryLabel
        } = this.props;
        return (
            <div className={cn.postItem}>
                <Link href={`/post?postNo=${postNo}&categoryNo=${categoryNo}`}
                      as={`/categories/${categoryNo}/posts/${postNo}`}>
                    <a>
                        <h2 className={cn.title}>{title}</h2>
                    </a>
                </Link>
                <Link href={`/post?postNo=${postNo}&categoryNo=${categoryNo}`}
                      as={`/categories/${categoryNo}/posts/${postNo}`}>
                    <a>
                        <p className={cn.content}>{contents}</p>
                    </a>
                </Link>
                <div>
                    <span className={cx(cn.meta, cn.categoryLabel)}>{categoryLabel}</span>
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

