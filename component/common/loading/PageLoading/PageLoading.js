import { HashLoader } from 'react-spinners';
import style from './PageLoading.scss';
import React from "react";

export default ({loading}) => (
    loading ?
        <div className={style.pageLoadingWrapper}>
            <div className={style.loadingPosition}>
                <HashLoader
                    color={"#6e827f"}
                    loading={loading}
                />
            </div>
        </div>
        : null

)