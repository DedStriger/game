import { useRouteMatch } from "react-router"
import { games } from "../../utils/mockData"
import {useMemo, useState} from 'react';
import Card from "./components/Card/Card";
import styles from './GameItemPage.module.scss'
import Search from "../../components/Search/Search";
import Table from "./components/Table/Table";


export default function GameItemPage(){
    const match = useRouteMatch<{id: string}>()
    const item = useMemo(() => games.filter(item => item.id === match.params.id)[0], [match.params.id])
    const [values, setValues] = useState('')
    const [activeCategory, setActiveCategory] = useState(item.tags.split(',')[0])
  
    return(
        <div>
            <Card category={activeCategory} setCategory={setActiveCategory} {...item}/>
            <div className={styles.search}>
                <Search
                    value={values}
                    onValueChange={setValues}
                    placeholder='Поиск по предложениям...'
                />
            </div>
            <Table game={item.name} category={activeCategory}/>
        </div>
    )
}