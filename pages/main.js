import Layout from '../component/common/layout/Layout';
import Mainlayout from '../component/common/layout/Mainlayout';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../component/editer/CodeBlock';
import WriteEditer from '../component/editer/WriteEditer/WriteEditer';
import React from "react";
import * as FileApi from '../core/apis/FileApi';

import style from '../style/scss/Main.scss';

class main extends React.Component {

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

    dndImage = (e) => {
        e.preventDefault();
        const {files} = e.dataTransfer;

        for (let i = 0; i < files.length; i++) {
            console.log(i);
            this.uploadImage(files[i]);
        }
    };

    pasteImage = (e) => {
        const {items} = e.clipboardData || e.originalEvent.clipboardData;
        if (items.length !== 2) return;
        if (items[1].kind !== 'file') return;
        const file = items[1].getAsFile();
        this.uploadImage(file);

        e.preventDefault();

    };

    onClickUploadImage = async () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e) => {
            if (!fileInput.files) return;
            this.uploadImage(fileInput.files[0]);
        };
        fileInput.click();
    };

    uploadImage = async (file) => {
        FileApi.saveImageAndGetImageUrl(file)
            .then(async (imgUrl) => {
                if (imgUrl === '') return;
                await this.onChangeContent(this.state.content + main.convertImageToCodeImage(imgUrl));
            });
    };

    static convertImageToCodeImage(imageUrl) {
        return `${'\n'}![${imageUrl}](${imageUrl})${'\n'}`;
    }

    render() {
        const {dndImage, pasteImage, onChangeContent} = this;

        return (
            <Layout title='메인 페이지'>
                <div>
                    <span>스마트 마크다운 에디터 스터디</span>
                    <br/>
                    <br/>
                    <button onClick={this.onClickUploadImage}>이미지 업로드</button>
                    <div>
                        <div className={style.markDownWrapper}>
                            <WriteEditer dndImage={(e)=>{dndImage(e)}}
                                         pasteImage={(e)=>{pasteImage(e)}}
                                         changeContent={(e)=>{onChangeContent(e)}}
                                         content={this.state.content}
                            />
                        </div>
                        <div className={style.markDownWrapper}>
                            <ReactMarkdown source={this.state.content}
                                           skipHtml={true}
                                           escapeHtml={false}
                                           renderers={{code: CodeBlock}}
                            />
                        </div>
                    </div>
                    <Mainlayout/>
                </div>
            </Layout>
        )
    }
}

export default main;