import React from "react";
import * as cn from './LoginView.scss';

const LoginView = ({
                       id,
                       password,
                       onLoginClick,
                       onChangeLoginInfo
                   }) => {

    return (
        <div className={cn.loginWrapper}>
            <div className={cn.loginArea}>
                <div className={cn.loginDescription}>
                    로그인 후 포스팅 해봐요!
                </div>
                <div className={cn.inputArea}>
                    <input placeholder='Id'
                           value={id}
                           onChange={(e)=>{onChangeLoginInfo('id',e.target.value)}}/>
                    <input placeholder='Password'
                           value={password}
                           type='password'
                           onChange={(e)=>{onChangeLoginInfo('password',e.target.value)}}/>
                </div>
                <div className={cn.loginSubArea}>
                    <button
                        className={cn.loginButton}
                        onClick={(e) => onLoginClick()}>Login
                    </button>
                </div>
            </div>
        </div>

    );
};

export default LoginView;
