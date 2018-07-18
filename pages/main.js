import Layout from '../component/common/layout/Layout';
import Mainlayout from '../component/common/layout/Mainlayout';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../component/editer/CodeBlock';
import React from "react";
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


    render() {

        return(
            <Layout title='메인 페이지'>
                <div>
                    <span>스마트 마크다운 에디터 스터디</span>
                    <br/>
                    <br/>
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