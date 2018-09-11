import React from "react";

import ReactMarkdown from 'react-markdown';
import CodeBlock from "../component/common/code/CodeBlock/CodeBlock";


class test extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            content : ''
        };
    }

    componentDidMount() {
    }

    onChangeContent = (content) => {
        this.setState({
            content: content
        });
    };


    render() {

        return (
            <div>
                <textarea value={this.state.content} onChange={(e)=>this.onChangeContent(e.target.value)}/>
                <ReactMarkdown source={this.state.content}
                               skipHtml={false}
                               escapeHtml={false}/>
            </div>
        )
    }
}

export default test;