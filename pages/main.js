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
                console.log('drop');
                console.log(e);
            });
            window.addEventListener('dragenter', (e)=>{
                console.log('dragenter');
                console.log(e);
            });
            window.addEventListener('dragleave', (e)=>{
                console.log('dragleave');
                console.log(e);
            });
            window.addEventListener('dragover', (e)=>{
                console.log('dragover');
                console.log(e);
            });
        }
        if (document && document.body) {
            document.body.addEventListener('paste', (e)=>{
                console.log('paste');
                console.log(e);
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
            FileApi.saveImageAndGetImageUrl(fileInput.files[0]).then(async (imgUrl) => {
                if (imgUrl === '') return;
                await this.stateChange(this.state.content + this.convertImageToCodeImage(imgUrl));
            });
        };
        fileInput.click();
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