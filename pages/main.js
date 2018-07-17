import Layout from '../component/common/layout/Layout';
import Mainlayout from '../component/common/layout/Mainlayout';
import ReactMarkdown from 'react-markdown';
import React from "react";
import style from '../style/scss/Main.scss';

const input = '# Live demo\n' +
    '\n' +
    'Changes are automatically rendered as you type.\n' +
    '\n' +
    '* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n' +
    '* Renders actual, "native" React DOM elements\n' +
    '* Allows you to escape or skip HTML (try toggling the checkboxes above)\n' +
    '* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n' +
    '\n' +
    '## HTML block below\n' +
    '\n' +
    '<blockquote>\n' +
    '  This blockquote will change based on the HTML settings above.\n' +
    '</blockquote>\n' +
    '\n' +
    '## How about some code?\n' +
    '```js\n' +
    'var React = require(\'react\');\n' +
    'var Markdown = require(\'react-markdown\');\n' +
    '\n' +
    'React.render(\n' +
    '  <Markdown source="# Your markdown here" />,\n' +
    '  document.getElementById(\'content\')\n' +
    ');\n' +
    '```\n' +
    '\n' +
    'Pretty neat, eh?\n' +
    '\n' +
    '## Tables?\n' +
    '\n' +
    '| Feature | Support |\n' +
    '| ------ | ----------- |\n' +
    '| tables | ✔ |\n' +
    '| alignment | ✔ |\n' +
    '| wewt | ✔ |\n' +
    '\n' +
    '## More info?\n' +
    '\n' +
    'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n' +
    '\n' +
    '---------------\n' +
    '\n' +
    'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'


export default () => (
    <Layout title='메인 페이지'>
        <div>
            <span>welcome to main-container</span>
            <br/>
            <br/>
            <div className={style.markDownWrapper}>
            <ReactMarkdown  source={input} skipHtml={true}/>
            </div>
            <Mainlayout/>
        </div>
    </Layout>
)
