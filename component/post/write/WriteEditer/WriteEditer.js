import React from "react";
import { MdAddToPhotos } from 'react-icons/lib/md';
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
        const { onDndImage, onPasteImage } = this.props;
        //dnd Event
        if (window) {
            window.addEventListener('drop',onDndImage);
        }

        // paste Event
        if (document && document.body) {
            document.body.addEventListener('paste', onPasteImage);
        }
    }

    removeEventListener() {
        const { onDndImage, onPasteImage } = this.props;

        if (window) {
            window.removeEventListener('drop', onDndImage);
        }
        if (document && document.body) {
            document.body.removeEventListener('paste', onPasteImage);
        }
    }

    render() {
        const { onChangeContent, onChangeTitle, content, onClickUploadImage, categories, onChangeCategories, selectedCategory, title , authInfo } = this.props;

        return (
            <div style={{height:'100%'}}>
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
                <div className={cn.writeTitleArea} >
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