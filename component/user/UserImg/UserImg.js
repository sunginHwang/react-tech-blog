import React from "react";
import * as cn from './UserImg.scss';

const UserImg = ({img}) => {

    return (
            <img
                className={cn.userImage}
                 src={img}
            />
    );
};

export default UserImg;
