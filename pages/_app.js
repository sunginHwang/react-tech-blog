import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper';
import LayoutContainer from '../container/LayoutContainer/LayoutContainer';
import UserInfoLoadContainer from '../container/UserInfoLoadContainer/UserInfoLoadContainer';
import store from '../core/store'
import { Provider } from 'react-redux'
import '../style/scss/DefaultSetting.scss';
import '../style/css/extraStyle.css';


class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
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
}

export default withRedux(store)(MyApp)

