import React from 'react'
import Layout from '../component/common/layout/Layout';


class urlRouterExample extends React.Component {

    static getInitialProps ({query: {id}}) {
        return {id}
    }

    render () {
        return (
            <Layout title='라우터예제'>
                당신이 검색한 키워드는 {this.props.id} 입니다.
            </Layout>
        )
    }
}

export default urlRouterExample;