import style from './MainHeader.scss';
import {MdList} from 'react-icons/lib/md';

export default ({
                    onClickSideBar,
                    onClickLogo,
                    showMobileHeader
                }) => (
        <div className={style.mainHeader + (showMobileHeader ? ' '+style.hideHeaderMobile: '')}>
            <div className={style.headerLeftArea}>
                <span className={style.headerLogo} onClick={onClickLogo}>woolta</span>
            </div>
            <span className={style.flexAuto}/>
            <div className={style.headerRightArea}>
                <span className={style.headerMenu + ' ' + style.headerMobileSideBarMenu}
                      onClick={onClickSideBar}>
                    <MdList/>
                </span>
            </div>
        </div>

)
