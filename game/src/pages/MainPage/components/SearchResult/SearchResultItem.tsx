import styles from './SearchResult.module.scss'
import { Link } from 'react-router-dom';
import { GAMES_URL } from '../../../../utils/links';

export type SearchResultItemProps = {
    id: string;
    imgSmall: string;
    name: string;
    tags: string | string[]
}

export default function SearchResultItem({id, imgSmall, name, tags} : SearchResultItemProps){
    return(
        <Link to={{pathname: `${GAMES_URL}/${id}`}} className={styles.item}>
            <img src={imgSmall} className={styles.itemImg} alt='avatar'/>
            <div>
                <div className={styles.itemName}>{name}</div>
                <div className={styles.itemTags}>{tags}</div>
            </div>
        </Link>
    )
}