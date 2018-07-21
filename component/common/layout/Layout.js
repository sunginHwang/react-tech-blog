import Head from 'next/head';
import React from "react";
import Link from 'next/link';

import PageLoading from '../loading/PageLoading/PageLoading';

import style from './Layout.scss';


export default class ReduxExampleContainer extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { pageLoading: true }
    }

    componentDidMount() {
        this.loadingComplete();
    }

    loadingComplete() {
        setTimeout(()=>{this.setState({ pageLoading: false });}, 500);
    }

    render() {


        return(
            <div>
                <Head>
                    <title>{ this.props.title }</title>
                </Head>
                <Link href='/write'>
                    <button className={style.tag}>글쓰기 페이지 이동</button>
                </Link>
                <Link  href='/reduxExample'>
                    <button className={style.tag}>리덕스 테스트 연동 테스트</button>
                </Link>
                <Link prefetch href='/reduxExample'>
                    <button className={style.tag}>리덕스 테스트 연동 테스트 prefetch</button>
                </Link>
                <Link href='/urlRouterExample?id=sungin'>
                    <button className={style.tag}>라우트 연동 테스트 Link 태그</button>
                </Link>
                <Link href='/custom/routes/sungin'>
                    <button className={style.tag}>커스텀 라우트 연동 테스트 Link 태그</button>
                </Link>

                <Link href='/urlWithFunctionComponent?id=sunginFunction'>
                    <button className={style.tag}>라우트 연동 테스트 a 태그 함수형컴포넌트</button>
                </Link>

                <Link href='/dynamicImportExample'>
                    <button className={style.tag}>Dynamic Import Example</button>
                </Link>
                <PageLoading loading={this.state.pageLoading}/>
                {
                    this.props.children
                }
            </div>
        )
    }
}
