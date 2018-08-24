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

    onChangeLoginInfo = (inputType, value) => {
        const {UserAction} = this.props;
        UserAction.changeLoginInputInfo({
            type: inputType,
            value: value
        });
    };

    handleLogin = async () => {
        const {UserAction, id, password } = this.props;

        const loginInfo = {
            id: id,
            password: password
        };

        UserAction.login(loginInfo)
    };

    render() {
        const { id, password } = this.props;
        return (
            <LoginView
                id={id}
                password={password}
                onLoginClick={this.handleLogin}
                onChangeLoginInfo={this.onChangeLoginInfo}
            />
        )
    }
}

export default connect(
    (state) => ({
        id: state.AuthReducer.id,
        password: state.AuthReducer.password,
    }),
    (dispatch) => ({
        UserAction: bindActionCreators(UserAction, dispatch)
    })
)(login);