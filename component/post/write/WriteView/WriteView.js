import React from "react";

import WriteEditer from '../WriteEditer/WriteEditer';
import MarkDownView from '../../../view/MarkDownView/MarkDownView';

import style from './WriteView.scss';

const WriteView = ({
                       title,
                       content,
                       authInfo,
                       categories,
                       selectedCategory,
                       onClickShowOriginPreview,
                       onClickUploadImage,
                       onChangeContent,
                       onChangeTitle,
                       onChangeCategories,
                       onDndImage,
                       onPasteImage,
                       upsertPost,
                   }) => {
    return (
        <div className={style.write}>
            <div className={style.markDownWrapper + ' ' + style.edit}>
                <WriteEditer
                             title={title}
                             authInfo={authInfo}
                             content={content}
                             categories={categories}
                             selectedCategory={selectedCategory}
                             onChangeCategories={onChangeCategories}
                             onChangeContent={(e) => {onChangeContent(e)}}
                             onChangeTitle={(e) => {onChangeTitle(e)}}
                             onDndImage={(e) => {onDndImage(e);}}
                             onPasteImage={(e) => {onPasteImage(e)}}
                             onClickUploadImage={(e) => {onClickUploadImage(e)}}/>
            </div>
            <div className={style.markDownWrapper + ' ' + style.view}>
                <div className={style.titleArea}>
                    <span className={style.previewTitle}>preview</span>
                    <div className={style.saveBtn} onClick={() => {upsertPost();}}>
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


