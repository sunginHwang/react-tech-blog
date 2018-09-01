import React from "react";

import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import ModalWrapper from '../../../common/Modal/ModalWrapper/ModalWrapper';
import style from './OriginPreview.scss';

const OriginPreview =  ({
                    content,
                    visible,
                    onToggleView
                }) =>{
    return (
        <ModalWrapper visible={visible} modalClick={()=>onToggleView()}>
            <div className={style.originPreview} >
                <div className={style.content} onClick={()=>onToggleView()}>
                    <MarkDownView content={content}
                                  skipHtml={false}
                                  escapeHtml={false}/>
                </div>
            </div>
        </ModalWrapper>
    )
};

export default OriginPreview;

