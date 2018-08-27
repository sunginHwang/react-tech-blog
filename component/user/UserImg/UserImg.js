import React from "react";
import * as style from './UserImg.scss';

const UserImg = ({img}) => {

    return (
            <img
                className={style.userImage}
                 src={img}
            />
    );
};

export default UserImg;
