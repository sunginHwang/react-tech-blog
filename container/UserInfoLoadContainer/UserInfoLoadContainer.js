import React, { Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { ACCESS_TOKEN } from '../../core/lib/constants';
import * as userAction from "../../core/actions/User/UserAction";

class UserInfoLoadContainer extends Component {

    checkUserInfo = async () => {
        const { userAction } = this.props;
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        if(accessToken) {
            userAction.loadAuthInfo();
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const isDiffUser = !prevProps.authInfo && this.props.authInfo;
        isDiffUser && this.checkUserInfo();
    }

    componentDidMount() {
        this.checkUserInfo();
    }

    render() {
        return null;
    }

}
export default connect(
    (state) => ({
        authInfo: state.AuthReducer.authInfo,
    }),
    (dispatch) => ({
        userAction: bindActionCreators(userAction, dispatch),
    })
)(UserInfoLoadContainer);