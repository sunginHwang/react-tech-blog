import style from './SideBar.scss';
import Link from 'next/link';
import Router from 'next/router'

export default ({isOpen, categories, clickCategoryPage, clickSideBarPage }) => {

    const postCategories = categories.map((category)=>{
        return <li key={category.value}>
                 <a onClick={()=>clickCategoryPage(category.value)} >{category.label}</a>
              </li>
    });

    return <div>
                <div className={style.sideBar + ' ' + (isOpen ? style.sideBarOpen : '')}>
                    <ul>
                        <li>
                            <a onClick={()=>{clickSideBarPage('/write')}}>글쓰기 페이지 이동</a>
                        </li>
                        {postCategories}
                    </ul>
                </div>
        <div className={(isOpen ? style.sideBarWhiteSpace : '')}/>
    </div>;
};
