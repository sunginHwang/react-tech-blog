import style from './SideBar.scss';
import Link from 'next/link';

export default ({isOpen, categories}) => {

    const postCategories = categories.map((category)=>{
        return <li key={category.value}>
                 <Link href={`/categories/${category.value}`}>{category.label}</Link>
              </li>
    });

    return <div>
                <div className={style.sideBar + ' ' + (isOpen ? style.sideBarOpen : '')}>
                    <ul>
                        <li>
                            <Link href='/write'>글쓰기 페이지 이동</Link>
                        </li>
                        {postCategories}
                    </ul>
                </div>
        <div className={(isOpen ? style.sideBarWhiteSpace : '')}/>
    </div>;
};
