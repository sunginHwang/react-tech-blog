import React from "react";
import ReactMarkdown from 'react-markdown';

import CodeBlock from '../../common/code/CodeBlock/CodeBlock';
import * as style from './MarkDownView.scss';


const MarkDownView = ({
                          content,
                          skipHtml,
                          escapeHtml
                      }) => {

    return (
        <div className={style.markDownView}>
            <ReactMarkdown source={content}
                           skipHtml={skipHtml}
                           escapeHtml={escapeHtml}
                           renderers={{code: CodeBlock}}
            />
        </div>
    );
};

export default MarkDownView;
