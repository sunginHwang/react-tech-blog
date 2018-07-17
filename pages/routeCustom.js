import React from 'react'
import Layout from '../component/common/layout/Layout';


const route = ({name}) => {

    return (
        <Layout title='커스텀라우터예제'>
            당신이 검색한 커스텀 파라미터 이름은 {name} 입니다. ver 함수형 컴포넌트 버전
        </Layout>
    );
};

route.getInitialProps = async ({query: {name}}) => {
    return {name}
};

export default route;