import React from "react";
import LoginView from '../component/user/loginView/LoginView';
import {connect} from "react-redux";
import * as UserAction from "../core/actions/User/UserAction";
import {bindActionCreators} from "redux";

class login extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    handleLogin = async () => {
        const { UserAction } = this.props;

        const loginInfo = {
            id: "gommpo",
            password: "as455"
        };

        UserAction.login(loginInfo)
    };

    render() {

        return (
            <LoginView
                onLoginClick={this.handleLogin}
            />
        )
    }
}

export default connect(
    (state) => ({
        post: state.PostInfoReducer.post
    }),
    (dispatch) => ({
        UserAction: bindActionCreators(UserAction, dispatch)
    })
)(login);