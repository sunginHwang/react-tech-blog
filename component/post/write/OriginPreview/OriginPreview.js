import React from "react";

import MarkDownView from '../../../../component/view/MarkDownView/MarkDownView';
import ModalWrapper from '../../../common/Modal/ModalWrapper/ModalWrapper';
import style from './OriginPreview.scss';

const OriginPreview =  ({
                    content,
                    visible,
                    clickCloseVisible
                }) =>{
    return (
        <ModalWrapper visible={visible}>
            <div className={style.originPreview} >
                <div className={style.content} onClick={(e)=>clickCloseVisible()}>
                    <MarkDownView content={content}
                                  skipHtml={true}
                                  escapeHtml={false}/>
                </div>

            </div>
        </ModalWrapper>
    )
};

export default OriginPreview;

