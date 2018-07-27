import Head from 'next/head';
import React from "react";

import PageLoading from '../loading/PageLoading/PageLoading';
import MainHeader from '../../mainTemplate/MainHeader/MainHeader';
import Footer from '../../mainTemplate/Footer/Footer';
import SideBar from '../../mainTemplate/SideBar/SideBar';

import style from './Layout.scss';


export default class ReduxExampleContainer extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {pageLoading: false, sideBarOpen: false, showMobileHeader: false}
    }

    componentDidMount() {
        this.loadingComplete();
        this.detectMobileScrollUpAndDown();
    }

    detectMobileScrollUpAndDown() {
            let lastScroll = 0;

            window.onscroll = () => {
                if(!this.state.sideBarOpen){
                    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

                    let isScrollDown = currentScroll > 0 && lastScroll <= currentScroll;

                    if (isScrollDown !== this.state.showMobileHeader) {
                        this.setState({showMobileHeader: isScrollDown})
                    }
                }
            }
    }

    loadingComplete() {
        /*setTimeout(()=>{this.setState({ pageLoading: false });}, 500);*/
    }

    onClickSideBar = () => {
        this.setState({sideBarOpen: !this.state.sideBarOpen})
    };

    render() {


        return (
            <div>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                <SideBar
                    isOpen={this.state.sideBarOpen}
                />
                <MainHeader
                    showMobileHeader={this.state.showMobileHeader}
                    onClickSideBar={(e) => this.onClickSideBar()}
                />
                <PageLoading loading={this.state.pageLoading}/>
                <div className={style.contentArea}>
                    {
                        this.props.children
                    }
                </div>

                <Footer/>
            </div>
        )
    }
}
