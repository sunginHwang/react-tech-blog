import React from "react";
import ReactMarkdown from 'react-markdown';

import CodeBlock from '../../common/code/CodeBlock/CodeBlock';
import * as cn from './MarkDownView.scss';


export default class MarkDownView extends React.PureComponent{

    render(){
      return (
          <div className={cn.markDownView}>
              <ReactMarkdown source={this.props.content}
                             skipHtml={this.props.skipHtml}
                             escapeHtml={this.props.escapeHtml}
                             renderers={{code: CodeBlock}}
              />
          </div>
      )
    }
};
