import Head from 'next/head';
import React from "react";

import PageLoading from '../../component/common/loading/PageLoading/PageLoading';
import MainHeader from '../../component/mainTemplate/MainHeader/MainHeader';
import Footer from '../../component/mainTemplate/Footer/Footer';
import SideBar from '../../component/mainTemplate/SideBar/SideBar';

import style from './Layout.scss';
import * as blogAction from "../../core/actions/BlogAction";
import * as layoutAction from "../../core/actions/LayoutAction";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Router from "next/router";


class Layout extends React.Component {


    componentDidMount() {
        console.log('componentDidMount');
        this.loadingComplete();
        this.handleLoadCategories();
        this.detectMobileScrollUpAndDown();
    }

    handleLoadCategories() {
        const {blogAction, categories} = this.props;
        if (categories.length === 0) {
            try {
                blogAction.getCategories();
            } catch (e) {
                console.log(e);
            }
        }

    }

    detectMobileScrollUpAndDown = () => {
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

    handleToggleSideBar = ( toggleValue ) => {
        this.props.layoutAction.toggleSideBar(toggleValue);
    };

    onClickCategoryPage = (categoryNo) => {
        Router.push(`/postList?categoryNo=${categoryNo}`, `/categories/${categoryNo}`);
        this.handleToggleSideBar(false);
    };

    onClickSideBarPage = (url) => {
        Router.push(url);
        this.handleToggleSideBar(false);
    };

    render() {
        const {categories, sideBar, mobileHeader, pageLoading} = this.props;

        return (
            <div>
                <Head>
                    <title>{"woolta"}</title>
                </Head>
                <SideBar
                    isOpen={sideBar}
                    clickCategoryPage={this.onClickCategoryPage}
                    clickSideBarPage={this.onClickSideBarPage}
                    categories={categories}
                />
                <MainHeader
                    showMobileHeader={mobileHeader}
                    onClickSideBar={(e) => this.handleToggleSideBar(!sideBar)}
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
        pageLoading: state.LayoutReducer.pageLoading,
        sideBar: state.LayoutReducer.sideBar,
        mobileHeader: state.LayoutReducer.mobileHeader
    }),
    (dispatch) => ({
        blogAction: bindActionCreators(blogAction, dispatch),
        layoutAction: bindActionCreators(layoutAction, dispatch)
    })
)(Layout);
