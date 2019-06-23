import React from "react";
import classNames from 'classnames/bind';
import WriteEditer from '../WriteEditer/WriteEditer';
import MarkDownView from '../../../view/MarkDownView/MarkDownView';

import cn from './WriteView.scss';
const cx = classNames.bind(cn);




export default class WriteView extends React.PureComponent{

    render(){
        const { title, content, authInfo, categories, selectedCategory, onClickShowOriginPreview, onClickUploadImage,
            onChangeContent, onChangeTitle, onChangeCategories, uploadImage, upsertPost} = this.props;

        return (
            <div className={cn.write}>
                <div className={cx(cn.markDownWrapper, cn.edit)}>
                    <WriteEditer
                        title={title}
                        authInfo={authInfo}
                        content={content}
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onChangeCategories={onChangeCategories}
                        onChangeContent={(e) => {onChangeContent(e)}}
                        onChangeTitle={(e) => {onChangeTitle(e)}}
                        uploadImage={uploadImage}
                        onClickUploadImage={(e) => {onClickUploadImage(e)}}/>
                </div>
                <div className={cx(cn.markDownWrapper, cn.view)}>
                    <div className={cn.titleArea}>
                        <span className={cn.previewTitle}>preview</span>
                        <div className={cn.saveBtn} onClick={() => {upsertPost();}}>
                            저장하기
                        </div>
                    </div>
                    <div className={cn.contentArea} onClick={() => onClickShowOriginPreview()}>
                        <MarkDownView content={content}
                                      skipHtml={false}
                                      escapeHtml={false}/>
                    </div>
                </div>
            </div>
        )
    }
};



