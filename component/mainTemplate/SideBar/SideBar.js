import style from './SideBar.scss';
import UserImg from '../../user/UserImg/UserImg';

export default ({
                    isOpen,
                    authInfo,
                    userImg,
                    categories,
                    clickCategoryPage,
                    clickSideBarPage
                }) => {

    const postCategories = categories.map((category) => {
        return <li key={category.value}>
            <a onClick={() => clickCategoryPage(category.value)}>{category.label}</a>
        </li>
    });

    const isLogin = authInfo.userId !== '';


    const UserMenu = isLogin ?
        <li>
            <a>
                <div className={style.imageArea}>
                    <UserImg img={authInfo.imageUrl}/>
                </div>
                <span>{authInfo.userId}</span>
                <div className={style.logoutArea}>
                    로그아웃
                </div>
            </a>
        </li>
        :
        <li>
            <a onClick={() => {
                clickSideBarPage('/login', '/login')
            }}>로그인</a>
        </li>
    ;

    const PostWriteMenu = isLogin === true &&
        <li>
            <a onClick={() => {
                clickSideBarPage('/edit', '/postEdit')
            }}>글쓰기 페이지 이동</a>
        </li>;

    return <div>
        <div className={style.sideBar + ' ' + (isOpen ? style.sideBarOpen : '')}>
            <ul>
                {UserMenu}
                {PostWriteMenu}
                {postCategories}
            </ul>
        </div>
        <div className={(isOpen ? style.sideBarWhiteSpace : '')}/>
    </div>;
};