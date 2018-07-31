import React from "react";
import { MdAddToPhotos } from 'react-icons/lib/md';

import style from './WriteEditer.scss';

export default class WriteEditer extends React.Component {

    componentDidMount() {
        this.createEventListener();
    }

    componentWillUnmount() {
        this.removeEventListener();
    }

    createEventListener() {
        const { dndImage, pasteImage } = this.props;
        //dnd Event
        if (window) {
            window.addEventListener('drop',dndImage);
        }

        // paste Event
        if (document && document.body) {
            document.body.addEventListener('paste', pasteImage);
        }
    }

    removeEventListener() {
        const { dndImage, pasteImage } = this.props;

        if (window) {
            window.removeEventListener('drop', dndImage);
        }
        if (document && document.body) {
            document.body.removeEventListener('paste', pasteImage);
        }
    }

    render() {
        const { changeContent, content, clickUploadImage } = this.props;
        return (
            <div style={{height:'100%'}}>
                <div className={style.writeTitleArea} >
                    <input className={style.writeTitle}
                           type='text'
                           placeholder='제목을 입력해 주세요.'
                           value=''/>
                    <div
                        className={style.imageInsertBtn}
                        onClick={clickUploadImage}><span><MdAddToPhotos/>이미지 업로드</span></div>
                </div>

                <textarea className={style.markDownEditer}
                          placeholder='작성할 내용을 입력해 주세요.'
                          onChange={(e) => {
                              changeContent(e.target.value);
                          }}
                          value={content}/>
            </div>

        )
    }
}