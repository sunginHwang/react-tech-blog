import React, { Component } from 'react'
import Error404 from '../component/common/error/Error404';

export default class Error extends Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    findErrorPage(statusCode){
        switch (statusCode){
            case 404: return <Error404/>;
            default: return <div>`${statusCode} 에러 입니다.`</div>;
        }
    }

    render() {
        const { statusCode } = this.props;
        const { findErrorPage } = this;

        let errorComponent = findErrorPage(statusCode);

        return (
            <div>
                {errorComponent}
            </div>
        )
    }
}