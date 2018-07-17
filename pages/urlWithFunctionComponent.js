import React from 'react'
import Layout from '../component/common/layout/Layout';


const urlWithFunctionComponent = ({id}) => {

    return (
        <Layout title='라우터예제'>
            당신이 검색한 키워드는 {id} 입니다. ver 함수형 컴포넌트 버전
        </Layout>
    );
};

urlWithFunctionComponent.getInitialProps = async ({query: {id}}) => {
    return {id}
};

export default urlWithFunctionComponent;