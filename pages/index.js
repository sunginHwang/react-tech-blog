import Link from 'next/link';
import Layout from '../component/common/layout/Layout';

import style from '../style/scss/Main.scss';

export default () =>
    <Layout title='시작페이지'>
        <p> Welcome to next.js!</p>
        <p> next 구조 보일러에이트 작업</p>
        <br/>
        <Link href='/main?name=sungin'>
            <button className={style.tag}>메인레이아웃 이동</button>
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

    </Layout>
