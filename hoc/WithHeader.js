import Head from 'next/head';
import React from 'react';

export default function WithHeader(WrappedComponent) {
    return class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                headerTitle: 'woolta'
            };
            this.withSetHeaderTitle = this.withSetHeaderTitle.bind(this);
        }

        withSetHeaderTitle(title) {
            this.setState({headerTitle: title});
        }

        static async getInitialProps({query: {...props}, req}) {
          await console.log({...props});
          return {...props}
        }

        render() {
            const { headerTitle } = this.state;
            return <div>
                <Head>
                    <title>{headerTitle}</title>
                </Head>
                <WrappedComponent {...this.props} withSetHeaderTitle={this.withSetHeaderTitle} />
            </div>
        }
    };
}
