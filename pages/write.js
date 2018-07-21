import React from "react";

import Layout from '../component/common/layout/Layout';
import WriteEditer from '../component/editer/WriteEditer/WriteEditer';
import MarkDownView from '../component/view/MarkDownView/MarkDownView';

import * as FileApi from '../core/apis/FileApi';

import style from './style/write.scss';

class write extends React.Component {

    constructor() {
        super();
        this.state = {
            content: '12'
        }
    }


    onChangeContent = (content) => {
        console.log(content);
        this.setState({content: content});
    };

    /*이미지 드래그 삽입 ( 복수 드래그 가능 )*/
    dndImage = (e) => {
        e.preventDefault();
        const {files} = e.dataTransfer;

        for (let i = 0; i < files.length; i++) {
            this.uploadImage(files[i]);
        }
    };

    /*키보드 cv 복사로 이미지 삽입*/
    pasteImage = (e) => {
        const {items} = e.clipboardData || e.originalEvent.clipboardData;
        if (items.length !== 2) return;
        if (items[1].kind !== 'file') return;
        const file = items[1].getAsFile();
        this.uploadImage(file);

        e.preventDefault();

    };

    /*이미지 버튼 삽입*/
    onClickUploadImage = async () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e) => {
            if (!fileInput.files) return;
            this.uploadImage(fileInput.files[0]);
        };
        fileInput.click();
    };

    /*이미지 업로딩*/
    uploadImage = async (file) => {
        FileApi.saveImageAndGetImageUrl(file)
            .then(async (imgUrl) => {
                if (imgUrl === '') return;
                await this.onChangeContent(this.state.content + main.convertImageToCodeImage(imgUrl));
            });
    };

    /* 이미지 태그 markdown 용으로 컨버팅 */
    static convertImageToCodeImage(imageUrl) {
        return `${'\n'}![${imageUrl}](${imageUrl})${'\n'}`;
    }

    render() {
        const { dndImage, pasteImage, onChangeContent, onClickUploadImage} = this;

        return (
            <Layout title='게시글 작성'>
                <div>
                    <span>스마트 마크다운 에디터 스터디</span>
                    <br/>
                    <br/>
                    <div>
                        <div className={style.markDownWrapper}>
                            <WriteEditer dndImage={(e)=>{dndImage(e)}}
                                         pasteImage={(e)=>{pasteImage(e)}}
                                         clickUploadImage={(e)=>{onClickUploadImage()}}
                                         changeContent={(e)=>{onChangeContent(e)}}
                                         content={this.state.content}/>
                        </div>
                        <div className={style.markDownWrapper}>
                            <MarkDownView content={this.state.content}
                                          skipHtml={true}
                                          escapeHtml={false}/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default write;