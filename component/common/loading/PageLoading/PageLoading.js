import { HashLoader } from 'react-spinners';
import React from "react";
import classNames from 'classnames/bind';
import cn from './PageLoading.scss';
const cx = classNames.bind(cn);


export default ({loading}) => (
    loading ?
        <div className={cx(cn.pageLoadingWrapper)}>
            <div className={cx(cn.loadingPosition)}>
                <HashLoader
                    color={"#6e827f"}
                    loading={loading}
                />
            </div>
        </div>
        : null

)