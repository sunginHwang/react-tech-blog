import React, { Component } from "react";
import LoginView from '../component/user/loginView/LoginView';
import WithHeader from '../hoc/WithHeader';

import {connect} from "react-redux";
import * as UserAction from "../core/actions/UserAction";
import {bindActionCreators} from "redux";

class login extends Component {

    componentDidMount() {
        this.props.withSetHeaderTitle('로그인');
    }

    // 로그인 인풋 double 바인딩
    onChangeLoginInfo = (inputType, value) => {
        const {UserAction} = this.props;

        UserAction.changeLoginInputInfo({
            type: inputType,
            value: value
        });
    };

    // 로그인 클릭
    onLoginClick = async () => {
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
                onLoginClick={this.onLoginClick}
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
