import React from "react";
import * as style from './LoginView.scss';

const LoginView = ({
    id,
    password,
   onLoginClick
               }) => {

    return (
        <div className={style.loginWrapper}>
            <div className={style.loginArea}>
                <div className={style.loginDescription}>
                    로그인 후 포스팅 해봐요!
                </div>
                <div className={style.inputArea}>
                    <input placeholder='Id'/>
                    <input placeholder='Password'/>
                </div>
                <div className={style.loginSubArea}>
                    <button
                        className={style.loginButton}
                        onClick={(e)=>onLoginClick()}>Login</button>
                </div>
            </div>
        </div>

    );
};

export default LoginView;
