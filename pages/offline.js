import React, {Component} from "react";
import WithHeader from '../hoc/WithHeader';


class offline extends Component {

    render() {

        return (
            <div>
                <h3>오프라인 페이지 입니다.</h3>
            </div>
        )
    }
}

export default WithHeader(offline);
