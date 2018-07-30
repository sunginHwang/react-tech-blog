import style from './BoardList.scss';
import ListItem from '../ListItem/ListItem';

const BoardList = ({ boardList }) => {
    console.log(boardList)
    const list = boardList.map((board) => {
        return <ListItem title={board.title}
                  contents={board.littleDescription}
                  author={board.author}
                  date={board.createdAt}/>
    });
    return (
       <div className={style.contentList}>
           {list}
       </div>
    );
};

export default BoardList;


