import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classNames from 'classnames';
import throttle from 'lodash/throttle';

import NanoBarLoading from '../../component/common/loading/NanoBarLoading/NanoBarLoading';
import SpinnerLoading from '../../component/common/loading/SpinnerLoading/SpinnerLoading';

import MainHeader from '../../component/mainTemplate/MainHeader/MainHeader';
import Footer from '../../component/mainTemplate/Footer/Footer';
import SideBar from '../../component/mainTemplate/SideBar/SideBar';

import * as layoutAction from "../../store/actions/LayoutAction";
import * as userAction from "../../store/actions/UserAction";

import {goPostListPage, goLoginPage, goPostEditPage, goMainPage} from '../../core/util/RouteUtil';
import { nanoBarLoadingSetup } from '../../core/lib/apiCall';

import cn from './LayoutContainer.scss';
const cx = classNames.bind(cn);

class LayoutContainer extends React.Component {


    async componentDidMount() {
        await nanoBarLoadingSetup();
        await this.onDetectMobileScrollUpAndDown();
    }

    // 모바일 스크롤 헤더 이벤트
    onDetectMobileScrollUpAndDown = () => {
        let lastScroll = 0;

        window.onscroll = throttle(() => {
            if (!this.props.sideBar) {
                const currentScroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
                let isScrollDown = lastScroll < currentScroll && currentScroll >= 0;
                lastScroll = currentScroll;
                this.props.layoutAction.showMobileHeader(isScrollDown);
            }
        },100);
    };

    // 사이드 메뉴 토글
    onToggleSideBar = (toggleValue) => {
        this.props.layoutAction.toggleSideBar(toggleValue);
    };

    // 카테고리 페이지 이동
    onClickCategoryPage = (categoryNo) => {
        goPostListPage(categoryNo);
        this.onToggleSideBar(false);
    };

    // 로그아웃
    onClickLogout = () => {
        this.props.userAction.logout();
    };

    //
    onClickSideBarPage = (type) => {

        switch (type) {
            case 'login':
                goLoginPage();
                break;
            case 'postEdit':
                goPostEditPage();
                break;
            case 'main':
                goMainPage();
                break;
            default:
                break;
        }

        this.onToggleSideBar(false);
    };

    render() {
        const {categories, sideBar, mobileHeader, authInfo, spinnerLoading, editMode} = this.props;

        return (
            <div>
                <SideBar
                    isOpen={sideBar}
                    authInfo={authInfo}
                    onClickCategoryPage={this.onClickCategoryPage}
                    onClickSideBarPage={this.onClickSideBarPage}
                    onClickLogout={this.onClickLogout}
                    categories={categories}
                />
                <MainHeader
                    showMobileHeader={mobileHeader}
                    onClickLogo={() => this.onClickSideBarPage('main')}
                    onClickSideBar={() => this.onToggleSideBar(!sideBar)}
                />
                <SpinnerLoading loading={spinnerLoading}/>
                <NanoBarLoading/>
                <div className={cx(cn.contentWrapper, !editMode && cn.contentWidth)}>
                    {
                        this.props.children
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        categories: state.CategoryReducer.categories,
        authInfo: state.AuthReducer.authInfo,
        spinnerLoading: state.LayoutReducer.spinnerLoading,
        sideBar: state.LayoutReducer.sideBar,
        mobileHeader: state.LayoutReducer.mobileHeader,
        editMode: state.LayoutReducer.editMode,
    }),
    (dispatch) => ({
        layoutAction: bindActionCreators(layoutAction, dispatch),
        userAction: bindActionCreators(userAction, dispatch)

    })
)(LayoutContainer);
