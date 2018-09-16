import * as React from "react";
import classNames from 'classnames/bind';
import UserImg from '../../user/UserImg/UserImg';

import cn from './SideBar.scss';
const cx = classNames.bind(cn);


export default ({
                    isOpen,
                    authInfo,
                    userImg,
                    categories,
                    onClickLogout,
                    onClickCategoryPage,
                    onClickSideBarPage
                }) => {

    const postCategories = categories.map((category) => {
            return <li key={category.value}>
                      <a onClick={() => onClickCategoryPage(category.value)}>{category.label}</a>
                   </li>
    });

    const isLogin = authInfo.userId !== '';

    const UserMenu = isLogin ?
        <li>
            <a>
                <div className={cn.imageArea}>
                    <UserImg img={authInfo.imageUrl}/>
                </div>
                <span>{authInfo.userId}</span>
                <div className={cn.logoutArea}
                     onClick={() => onClickLogout()}>로그아웃
                </div>
            </a>
        </li>
        :
        <li>
            <a onClick={() => {onClickSideBarPage('login')}}>로그인</a>
        </li>
    ;

    const PostWriteMenu = isLogin === true &&
        <li>
            <a onClick={() => {onClickSideBarPage('postEdit')}}>글쓰기 페이지 이동</a>
        </li>;

    return <div>
                <div className={cx(cn.sideBar, {sideBarOpen : isOpen})}>
                    <ul>
                        {UserMenu}
                        {PostWriteMenu}
                        {postCategories}
                    </ul>
                </div>
                <div className={cx({sideBarWhiteSpace : isOpen})} />
          </div>;
};