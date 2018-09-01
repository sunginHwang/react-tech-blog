import React from "react";

import WriteEditer from '../WriteEditer/WriteEditer';
import MarkDownView from '../../../view/MarkDownView/MarkDownView';

import style from './WriteView.scss';

const WriteView = ({
                       onDndImage,
                       onPasteImage,
                       onClickUploadImage,
                       onChangeContent,
                       onChangeTitle,
                       title,
                       content,
                       categories,
                       onChangeCategories,
                       selectedCategory,
                       savePost,
                       onClickShowOriginPreview
                   }) => {
    return (
        <div className={style.write}>
            <div className={style.markDownWrapper + ' ' + style.edit}>
                <WriteEditer onDndImage={(e) => {onDndImage(e);}}
                             onPasteImage={(e) => {onPasteImage(e)}}
                             onClickUploadImage={(e) => {onClickUploadImage(e)}}
                             onChangeCategories={onChangeCategories}
                             categories={categories}
                             selectedCategory={selectedCategory}
                             onChangeContent={(e) => {onChangeContent(e)}}
                             onChangeTitle={(e) => {onChangeTitle(e)}}
                             title={title}
                             content={content}/>
            </div>
            <div className={style.markDownWrapper + ' ' + style.view}>
                <div className={style.titleArea}>
                    <span className={style.previewTitle}>preview</span>
                    <div className={style.saveBtn} onClick={(e) => {savePost();}}>
                        저장하기
                    </div>
                </div>
                <div className={style.contentArea} onClick={() => onClickShowOriginPreview()}>
                    <MarkDownView content={content}
                                  skipHtml={false}
                                  escapeHtml={false}/>
                </div>

            </div>
        </div>
    );
};

export default WriteView;


