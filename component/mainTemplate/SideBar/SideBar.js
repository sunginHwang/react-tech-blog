import style from './SideBar.scss';
import Link from 'next/link';

export default ({isOpen}) => (
    <div>
        <div className={style.sideBar +' '+ ( isOpen ? style.sideBarOpen: '')}>
            <ul>
                <li>
                    <Link href='/write'>글쓰기 페이지 이동</Link>
                </li>
                <li>
                    <Link  href='/categories/1'>리스트 보기</Link>
                </li>
                <li>
                    <Link  href='/categories/1/posts/3'>자세히 보기</Link>
                </li>
                <li>
                    <Link  href='/reduxExample'>리덕스 테스트 연동 테스트</Link>
                </li>
                <li>
                    <Link prefetch href='/reduxExample'>리덕스 테스트 연동 테스트 prefetch</Link>
                </li>
                <li>
                    <Link href='/urlRouterExample?id=sungin'>라우트 연동 테스트 Link 태그</Link>
                </li>
                <li>
                    <Link href='/custom/routes/sungin'>커스텀 라우트 연동 테스트 Link 태그</Link>
                </li>
                <li>
                    <Link href='/urlWithFunctionComponent?id=sunginFunction'>라우트 연동 테스트 a 태그 함수형컴포넌트</Link>
                </li>
                <li>
                    <Link href='/dynamicImportExample'>Dynamic Import Example</Link>
                </li>
            </ul>

        </div>
        <div className={(isOpen ? style.sideBarWhiteSpace: '')}/>
    </div>


)
