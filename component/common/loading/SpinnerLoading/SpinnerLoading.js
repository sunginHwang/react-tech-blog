import { HashLoader } from 'react-spinners';
import React from "react";
import classNames from 'classnames/bind';
import cn from './SpinnerLoading.scss';
const cx = classNames.bind(cn);


export default ({loading}) => (
    loading ?
        <div className={cx(cn.SpinnerLoadingWrapper)}>
            <div className={cx(cn.loadingPosition)}>
                <HashLoader
                    color={"#6e827f"}
                    loading={loading}
                />
            </div>
        </div>
        : null

)
