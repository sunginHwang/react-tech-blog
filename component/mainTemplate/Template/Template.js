import Head from 'next/head';
import React from "react";

import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

import style from './Template.scss';


export default class Template extends React.Component {

    constructor(...args) {
        super(...args);
        console.log(12);
        this.state = { sideBarOpen: false, showMobileHeader: false}
    }

    componentDidMount() {
        console.log(34);
        this.detectMobileScrollUpAndDown();
    }

    detectMobileScrollUpAndDown() {
        let lastScroll = 0;

        window.onscroll = () => {
            console.log('onScroll');

            if(!this.state.sideBarOpen){
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

                let isScrollDown = currentScroll > 0 && lastScroll <= currentScroll;

                if (isScrollDown !== this.state.showMobileHeader) {
                    this.setState({showMobileHeader: isScrollDown})
                }
            }
        }
    }

    onClickSideBar = () => {
        console.log('onClickSideBar');
        this.setState({sideBarOpen: !this.state.sideBarOpen})
    };

    render() {

        return (
            <div>
                <SideBar
                    isOpen={this.state.sideBarOpen}
                />
                <MainHeader
                    showMobileHeader={this.state.showMobileHeader}
                    onClickSideBar={(e) => this.onClickSideBar()}
                />
                <Footer/>
            </div>
        )
    }
}
