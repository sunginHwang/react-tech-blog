import React from 'react'
import Error404 from '../component/common/error/Error404';

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        console.log(statusCode);
        return { statusCode }
    }

    getErrorPage(statusCode){
        switch (statusCode){
            case 404: return <Error404/>;
            default: return <div>`${statusCode} 에러 입니다.`</div>;
        }
    }

    render() {
        const { statusCode } = this.props;
        const { getErrorPage } = this;

        let errorComponent = getErrorPage(statusCode);

        return (
            <div>
                {errorComponent}
            </div>
        )
    }
}