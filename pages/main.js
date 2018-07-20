import Layout from '../component/common/layout/Layout';
import Mainlayout from '../component/common/layout/Mainlayout';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../component/editer/CodeBlock';
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

    componentDidMount(){
        if (window) {
            window.addEventListener('drop', (e)=>{
                e.preventDefault();
                const {  files } = e.dataTransfer;

                for (let i = 0; i < files.length; i++) {
                    this.imageUpload(files[i]);
                }
            });
        }
        if (document && document.body) {
            document.body.addEventListener('paste', (e)=>{
                console.log('paste');
                const { items } = e.clipboardData || e.originalEvent.clipboardData;
                if (items.length !== 2) return;
                if (items[1].kind !== 'file') return;
                const file = items[1].getAsFile();
                this.imageUpload(file);

                e.preventDefault();
            });
        }
    }

    stateChange(content) {
        this.setState({content: content});
    }

    imageUploadClick = async () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e) => {
            if (!fileInput.files) return;
            this.imageUpload(fileInput.files[0]);
        };
        fileInput.click();
    };

    imageUpload = async (file) =>{
        FileApi.saveImageAndGetImageUrl(file).then(async (imgUrl) => {
            if (imgUrl === '') return;
            await this.stateChange(this.state.content + this.convertImageToCodeImage(imgUrl));
        });
    };

    convertImageToCodeImage(imageUrl) {
        return `${'\n'}![${imageUrl}](${imageUrl})${'\n'}`;
    }

    render() {

        return (
            <Layout title='메인 페이지'>
                <div>
                    <span>스마트 마크다운 에디터 스터디</span>
                    <br/>
                    <br/>
                    <button onClick={this.imageUploadClick}>이미지 업로드</button>
                    <div >
                        <div className={style.markDownWrapper}>
                            <textarea className={style.markDownEditer}
                                      onChange={(e) => {
                                          this.stateChange(e.target.value);
                                      }}
                                      value={this.state.content}/>
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