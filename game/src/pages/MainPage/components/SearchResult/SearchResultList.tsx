import { games } from '../../../../utils/mockData'
import styles from './SearchResult.module.scss'
import SearchResultItem from './SearchResultItem'

export type SearchResultListProps = {
    letter: string;
}

export default function SearchResultList({letter} : SearchResultListProps){
    return(
        <div id={letter}>
            <div className={styles.title}>
                {letter}
            </div>
            <div className={styles.result}>
                {
                    games.map(item => (
                        <SearchResultItem key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}