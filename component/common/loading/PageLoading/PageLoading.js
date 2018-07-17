import { HashLoader } from 'react-spinners';
import style from './PageLoading.scss';

export default ({loading}) => (
    loading ?
        <div className={style.pageLoadingWrapper}>
            <div className={style.loadingPosition}>
                <HashLoader
                    color={"#78ccdd"}
                    loading={loading}
                />
                <p>페이지 이동중 입니다.</p>
            </div>
        </div>
        : null

)