import Head from 'next/head';
import React from "react";

import PageLoading from '../../component/common/loading/PageLoading/PageLoading';
import MainHeader from '../../component/mainTemplate/MainHeader/MainHeader';
import Footer from '../../component/mainTemplate/Footer/Footer';
import SideBar from '../../component/mainTemplate/SideBar/SideBar';

import * as categoryAction from "../../core/actions/CategoryAction";
import * as layoutAction from "../../core/actions/LayoutAction";
import * as userAction from "../../core/actions/User/UserAction";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Router from "next/router";

import style from './LayoutContainer.scss';

class LayoutContainer extends React.Component {


    componentDidMount() {
        this.loadingComplete();
        this.loadCategories();
        this.onDetectMobileScrollUpAndDown();
    }

    loadCategories() {
        const {categoryAction, categories} = this.props;
        if (categories.length === 0) {
            try {
                categoryAction.getCategories();
            } catch (e) {
                console.log(e);
            }
        }

    }

    onDetectMobileScrollUpAndDown = () => {
        let lastScroll = 0;

        const {layoutAction, sideBar} = this.props;

        window.onscroll = () => {
            if (!sideBar) {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

                let isScrollDown = lastScroll <= currentScroll;
                lastScroll = currentScroll;

                layoutAction.showMobileHeader(isScrollDown);

            }
        }
    };

    loadingComplete() {
        /*this.props.layoutAction.togglePageLoading(true);
        setTimeout(()=>{this.props.layoutAction.togglePageLoading(false);}, 500);*/
    }

    onToggleSideBar = ( toggleValue ) => {
        this.props.layoutAction.toggleSideBar(toggleValue);
    };

    onClickCategoryPage = (categoryNo) => {
        Router.push(`/postList?categoryNo=${categoryNo}`, `/categories/${categoryNo}`);
        this.onToggleSideBar(false);
    };

    onClickLogout = () => {
        this.props.userAction.logout();
    };

    onClickSideBarPage = (url, browserUrl) => {
        Router.push(browserUrl, url);
        this.onToggleSideBar(false);
    };

    render() {
        const {categories, sideBar, mobileHeader, authInfo, pageLoading} = this.props;

        return (
            <div>
                <Head>
                    <title>{"woolta"}</title>
                </Head>
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
                    onClickSideBar={(e) => this.onToggleSideBar(!sideBar)}
                />
                <PageLoading loading={pageLoading}/>
                <div className={style.contentWrapper}>
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
        pageLoading: state.LayoutReducer.pageLoading,
        sideBar: state.LayoutReducer.sideBar,
        mobileHeader: state.LayoutReducer.mobileHeader,
    }),
    (dispatch) => ({
        categoryAction: bindActionCreators(categoryAction, dispatch),
        layoutAction: bindActionCreators(layoutAction, dispatch),
        userAction: bindActionCreators(userAction, dispatch)

    })
)(LayoutContainer);
