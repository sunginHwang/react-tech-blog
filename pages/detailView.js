import React from "react";
import Layout from '../component/common/layout/Layout';
import BoardContent from '../component/board/detail/BoardContent/BoardContent';

export default class detailView extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '계시글 제목입니다 츄',
            content: '\n' +
            '# Live demo\n' +
            '\n' +
            'Changes are automatically rendered as you type.\n' +
            '\n' +
            '* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n' +
            '* Renders actual, "native" React DOM elements\n' +
            '* Allowsfffffffffffff you to escape or skip HTML (try toggling the checkboxes above)\n' +
            '* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n' +
            '\n' +
            '## HTML block below\n' +
            '\n' +
            '<blockquote>\n' +
            '  This blockquote will cffffffffffhange based on the HTML settings above.\n' +
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
        }
    }

    static getInitialProps ({query: {categoryNo, boardNo}}) {
        return {categoryNo, boardNo}
    }

    render () {
        return (
            <Layout title={this.state.title}>
                <BoardContent
                    title={this.state.title}
                    contents={this.state.content}/>
            </Layout>
        )
    }
}