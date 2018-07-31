import React from "react";
import Router from 'next/router'

import Layout from '../component/mainTemplate/Layout/Layout';
import PostLayout from '../component/post/list/PostLayout/PostLayout';

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
                    postNo: 1,
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                },
                {
                    postNo: 2,
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                },
                {
                    postNo: 3,
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                },
                {
                    postNo: 4,
                    title: '리엑트 제목',
                    littleDescription: '리엑트에 이러한 일이 있었습니다.',
                    author: '황성인',
                    createdAt: '2018-05-13'
                }
            ]

        }
    }

    onClickDetailPage = (postNo) => {
        const { categoryNo } = this.props;
        Router.push(`/categories/${categoryNo}/posts/${postNo}`);

    };

    static getInitialProps ({query: {categoryNo}}) {
        return {categoryNo}
    }

    render () {
        const { category, list } = this.state;
        return (
            <Layout title={category.name}>
                <PostLayout
                    clickDetailPage={this.onClickDetailPage}
                    posts={list}/>
            </Layout>
        )
    }
}