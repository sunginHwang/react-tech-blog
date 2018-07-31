import React from "react";

import WriteEditer from '../WriteEditer/WriteEditer';
import MarkDownView from '../../../view/MarkDownView/MarkDownView';

import style from './WriteView.scss';

const WriteView = ({ dndImage, pasteImage, clickUploadImage, changeContent, content }) => {
    return (
            <div className={style.write}>
                <div className={style.markDownWrapper}>
                    <WriteEditer dndImage={(e)=>{dndImage(e);}}
                                 pasteImage={(e)=>{pasteImage(e)}}
                                 clickUploadImage={(e)=>{clickUploadImage(e)}}
                                 changeContent={(e)=>{changeContent(e)}}
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


