import React from "react";
import ReactMarkdown from 'react-markdown';

import CodeBlock from '../../common/code/CodeBlock/CodeBlock';


const MarkDownView = ({
                          content,
                          skipHtml,
                          escapeHtml
                      }) => {

    return (
        <ReactMarkdown source={content}
                       skipHtml={skipHtml}
                       escapeHtml={escapeHtml}
                       renderers={{code: CodeBlock}}
        />
    );
};

export default MarkDownView;
