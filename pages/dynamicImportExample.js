import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../component/common/layout/Layout';
import PageLoading from '../component/common/loading/PageLoading/PageLoading';

const DynamicImport = dynamic(import('../component/dynamic/dynamicImport'), {
    loading: () => <PageLoading loading={true}/>
});



export default class dynamicImportExample extends React.Component {

    render () {
        return (
            <Layout title='다이나믹 임포트 예제'>
                <DynamicImport/>
            </Layout>
        )
    }
}



