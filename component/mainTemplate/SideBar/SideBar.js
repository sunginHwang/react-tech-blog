import style from './SideBar.scss';

export default ({isOpen}) => (
    <div>
        <div className={style.sideBar +' '+ ( isOpen ? style.sideBarOpen: '')}>
            <ul>
                <li>게시판1212</li>
                <li>게시판1212</li>
                <li>게시판1212</li>
                <li>게시판1212</li>
                <li>게시판1212</li>
                <li>게시판1212</li>
            </ul>

        </div>
        <div className={(isOpen ? style.sideBarWhiteSpace: '')}/>
    </div>


)
