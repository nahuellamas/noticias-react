import New from './New';
import styles from './ListNews.module.css';

const ListNews = ({news}) => {
    return ( 
        <div className={styles.list_news}>
            {news.map(option => (
                <New
                    key={option.url}
                    option={option}
                 />
            ))}
        </div>
     );
}
 
export default ListNews;