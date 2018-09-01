import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import LayoutContainer from '../container/LayoutContainer/LayoutContainer';
import UserInfoLoadContainer from '../container/UserInfoLoadContainer/UserInfoLoadContainer';
import {initializeStore} from '../core/store'
import { Provider } from 'react-redux'
import '../style/scss/DefaultSetting.scss';

export default withRedux(initializeStore)(class MyApp extends App {


    render () {
        const {Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <div>
                        <UserInfoLoadContainer/>
                        <LayoutContainer>
                            <Component {...pageProps} />
                        </LayoutContainer>
                    </div>
                </Provider>
            </Container>
        )
    }
})


