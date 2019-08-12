import App, {Container} from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper';

import * as categoryAction from "../store/actions/CategoryAction";
import LayoutContainer from '../container/LayoutContainer/LayoutContainer';
import UserInfoLoadContainer from '../container/UserInfoLoadContainer/UserInfoLoadContainer';

import store from '../store'
import '../style/scss/DefaultSetting.scss';


class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        // 초기값 세팅 -> 게시글 카테고리 load (ssr)
        const loadCategories = async (store) => {
            await store.execSagaTasks(ctx.isServer, dispatch => {
                ctx.isServer && dispatch(categoryAction.getCategories());
            });
        }

        await loadCategories(ctx.store);

        return {pageProps}
    }

    componentDidMount(){
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then((reg) => {
                    console.log('Service worker registered.', reg);
                })
                .catch(e => console.log(e));
        });
    }

    render() {
        const {Component, pageProps, store} = this.props
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

