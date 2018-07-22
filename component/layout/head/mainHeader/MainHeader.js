import style from './MainHeader.scss';

export default () => (
    <div className={style.mainHeaderWrapper}>
        <div className={style.mainHeader}>
            <div className={style.headerLeftArea}>
                <span className={style.headerLogo}>woolta</span>
            </div>
            <span className={style.flexAuto}/>
            <div className={style.headerRightArea}>
                <span className={style.headerMenu}>headerRight</span>
            </div>
        </div>
    </div>

)
