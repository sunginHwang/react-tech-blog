import React from "react";
import Layout from '../component/common/layout/Layout';
import BoardContent from '../component/board/detail/BoardContent/BoardContent';

export default class detailView extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '리엑트 미들웨어 사용법을 알아보자.',
            content: '\n' +
            '# Live demo\n' +
            '\n' +
            'Changes are automatically rendered as you type.\n' +
            '\n' +
            '* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n' +
            '* Renders actual, "native" React DOM elements\n' +
            '* AllowsffffffffffffdangerouslySetInnerHTML is useddangerouslySetInnerHTML is useddangerouslySetInnerHTML is useddangerouslySetInnerHTML is useddangerouslySetInnerHTML is useddangerouslySetInnerHTML is usedf you to escape or skip HTML (try toggling the checkboxes above)\n' +
            '* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n' +
            '\n' +
            '## HTML block below\n' +
            '\n' +
            '\n' +
            '## How about some code?\n' +
            '```js\n' +
            'var React = require(\'react\');\n' +
            'var Markdown = require(\'react-markdown\');\n' +
            '\n' +
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