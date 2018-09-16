import React, { Component } from "react";
import LoginView from '../component/user/loginView/LoginView';
import WithHeader from '../hoc/WithHeader';

import {connect} from "react-redux";
import * as UserAction from "../core/actions/User/UserAction";
import {bindActionCreators} from "redux";

class login extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.withSetHeaderTitle('로그인');

    }

    onChangeLoginInfo = (inputType, value) => {
        const {UserAction} = this.props;

        UserAction.changeLoginInputInfo({
            type: inputType,
            value: value
        });
    };

    onLogin = async () => {
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
                onLoginClick={this.onLogin}
                onChangeLoginInfo={this.onChangeLoginInfo}
            />
        )
    }
}

export default WithHeader(connect(
    (state) => ({
        id: state.AuthReducer.id,
        password: state.AuthReducer.password,
    }),
    (dispatch) => ({
        UserAction: bindActionCreators(UserAction, dispatch)
    })
)(login));