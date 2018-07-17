import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import {initializeStore} from '../core/store'
import { Provider } from 'react-redux'

export default withRedux(initializeStore)(class MyApp extends App {


    render () {
        const {Component, pageProps, store,} = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
})


