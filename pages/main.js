import Layout from '../component/common/layout/Layout';
import Mainlayout from '../component/common/layout/Mainlayout';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../component/editer/CodeBlock';
import React from "react";
import * as FileApi from '../core/apis/FileApi';

import style from '../style/scss/Main.scss';

class main extends React.Component {

    constructor(){
        super();
        this.state = {
            content : '12'
        }
    }

    stateChange(content){
        this.setState({content: content});
    }
     imageUploadClick = async () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e) => {
            if (!fileInput.files) return;
            FileApi.saveImageAndGetImageUrl(fileInput.files[0]).then(async(imgUrl)  => {
                if(imgUrl ==='') return;
                await this.stateChange(this.state.content+this.convertImageToCodeImage(imgUrl));
            });
        };
        fileInput.click();
    };

    convertImageToCodeImage(imageUrl){
        return `${'\n'}![${imageUrl}](${imageUrl})${'\n'}`;
    }

    render() {

        return(
            <Layout title='메인 페이지'>
                <div>
                    <span>스마트 마크다운 에디터 스터디</span>
                    <br/>
                    <br/>
                    <button onClick={this.imageUploadClick}>이미지 업로드</button>
                    <div className={style.markDownWrapper}>
                        <textarea onChange={(e)=>{this.stateChange(e.target.value);}}>{this.state.content}</textarea>
                    </div>
                    <div className={style.markDownWrapper}>
                        <ReactMarkdown  source={this.state.content}
                                        skipHtml={true}
                                        escapeHtml={false}
                                        renderers={{code: CodeBlock}}
                        />
                    </div>
                    <Mainlayout/>
                </div>
            </Layout>
        )
    }
}

export default main;