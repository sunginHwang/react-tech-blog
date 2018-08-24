import React from "react";
import * as style from './LoginView.scss';

const LoginView = ({
                       id,
                       password,
                       onLoginClick,
                       onChangeLoginInfo
                   }) => {

    return (
        <div className={style.loginWrapper}>
            <div className={style.loginArea}>
                <div className={style.loginDescription}>
                    로그인 후 포스팅 해봐요!
                </div>
                <div className={style.inputArea}>
                    <input placeholder='Id'
                           value={id}
                           onChange={(e)=>{onChangeLoginInfo('id',e.target.value)}}/>
                    <input placeholder='Password'
                           value={password}
                           type='password'
                           onChange={(e)=>{onChangeLoginInfo('password',e.target.value)}}/>
                </div>
                <div className={style.loginSubArea}>
                    <button
                        className={style.loginButton}
                        onClick={(e) => onLoginClick()}>Login
                    </button>
                </div>
            </div>
        </div>

    );
};

export default LoginView;
