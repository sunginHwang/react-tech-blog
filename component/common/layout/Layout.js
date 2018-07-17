import Head from 'next/head';
import Router from 'next/router'
import React from "react";
import PageLoading from '../loading/PageLoading/PageLoading';

Router.onRouteChangeStart = (url) => {
    console.log(`route: ${url}`)
}

export default class ReduxExampleContainer extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { pageLoading: true }
    }

    componentDidMount() {
        this.loadingComplete();
    }

    loadingComplete() {
        setTimeout(()=>{this.setState({ pageLoading: false });}, 500);
    }

    render() {


        return(
            <div>
                <Head>
                    <title>{ this.props.title }</title>
                </Head>
                <PageLoading loading={this.state.pageLoading}/>
                {
                    this.props.children
                }
            </div>
        )
    }
}
