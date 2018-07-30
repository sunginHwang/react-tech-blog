import React from "react";
import Layout from '../component/common/layout/Layout';
import BoardList from '../component/board/list/BoardList/BoardList';

export default class list extends React.Component {

    constructor() {
        super();
        this.state = {
            category : {
                no : 2,
                name : '블로그 카테고리'
            },
            list: [
                {
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                },
                {
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                },
                {
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                },
                {
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                }
            ]

        }
    }

    static getInitialProps ({query: {categoryNo}}) {
        return {categoryNo}
    }

    render () {
        return (
            <Layout title={this.state.category.name}>
                <BoardList
                    boardList={this.state.list}/>
            </Layout>
        )
    }
}