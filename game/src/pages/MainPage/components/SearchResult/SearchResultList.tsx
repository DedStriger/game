import { games } from '../../../../utils/mockData'
import styles from './SearchResult.module.scss'
import SearchResultItem from './SearchResultItem'

export default function SearchResultList(){
    return(
        <div>
            <div className={styles.title}>
                A
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