import React from "react";
import {MdAddToPhotos} from 'react-icons/md';
import Select from 'react-select';

import cn from './WriteEditer.scss';

export default class WriteEditer extends React.Component {

    componentDidMount() {
        this.createEventListener();
    }

    componentWillUnmount() {
        this.removeEventListener();
    }

    createEventListener() {
        //dnd Event
        if (window)  window.addEventListener('drop', this.onDnd);
        // paste Event
        if (document && document.body) document.body.addEventListener('paste', this.onPaste);
    }

    onPaste = (e) => {
        const {items} = e.clipboardData || e.originalEvent.clipboardData;
        if (items.length !== 2) return;
        if (items[1].kind !== 'file') return;

        const file = items[1].getAsFile();

        this.props.uploadImage(file);
        e.preventDefault();
    };

    onDnd = (e) => {
        e.preventDefault();
        const {files} = e.dataTransfer;

        for (let i = 0; i < files.length; i++) {
            this.props.uploadImage(files[i]);
        }
    };

    removeEventListener() {
        if (window) window.removeEventListener('drop', this.onDnd);
        if (document && document.body) document.body.removeEventListener('paste', this.onPaste);
    }

    render() {
        const {onChangeContent, onChangeTitle, content, onClickUploadImage, categories, onChangeCategories, selectedCategory, title, authInfo} = this.props;

        return (
            <div style={{height: '100%'}}>
                <div className={cn.writeTopArea}>
                    <img className={cn.author} src={authInfo.imageUrl}/>
                    <span className={cn.authorName}>{`작성자 : ${authInfo.userId}`}</span>
                </div>
                <div className={cn.writeTopArea}>
                    <Select
                        value={selectedCategory}
                        onChange={onChangeCategories}
                        options={categories}/>
                </div>
                <div className={cn.writeTitleArea}>
                    <input className={cn.writeTitle}
                           type='text'
                           placeholder='제목을 입력해 주세요.'
                           onChange={(e) => {onChangeTitle(e.target.value);}}
                           value={title}/>
                    <div
                        className={cn.imageInsertBtn}
                        onClick={onClickUploadImage}><span><MdAddToPhotos/>이미지 업로드</span></div>
                </div>
                <textarea className={cn.markDownEditer}
                          placeholder='작성할 내용을 입력해 주세요.'
                          onChange={(e) => {onChangeContent(e.target.value);}}
                          value={content}/>
            </div>

        )
    }
}
