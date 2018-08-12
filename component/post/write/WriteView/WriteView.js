import React from "react";

import WriteEditer from '../WriteEditer/WriteEditer';
import MarkDownView from '../../../view/MarkDownView/MarkDownView';

import style from './WriteView.scss';

const WriteView = ({ dndImage, pasteImage, clickUploadImage, changeContent, changeTitle, title , content, categories, changeCategory, selectedCategory, savePost }) => {
    return (
            <div className={style.write}>
                <div>
                    <button onClick={(e)=>{savePost();}} >저장</button>
                </div>
                <div className={style.markDownWrapper+' '+ style.edit}>
                    <WriteEditer dndImage={(e)=>{dndImage(e);}}
                                 pasteImage={(e)=>{pasteImage(e)}}
                                 clickUploadImage={(e)=>{clickUploadImage(e)}}
                                 changeCategory={changeCategory}
                                 categories={categories}
                                 selectedCategory={selectedCategory}
                                 changeContent={(e)=>{changeContent(e)}}
                                 changeTitle={(e)=>{changeTitle(e)}}
                                 title={title}
                                 content={content}/>
                </div>
                <div className={style.markDownWrapper +' '+ style.view}>
                    <div className={style.previewTitleArea}>
                        <span className={style.previewTitle}>preview</span>
                    </div>
                    <MarkDownView content={content}
                                  skipHtml={true}
                                  escapeHtml={false}/>
                </div>
            </div>
    );
};

export default WriteView;


