import hero from '../../assets/hero.png'
import Letters from './components/Letters'
import styles from './MainPage.module.scss'
import {useState} from 'react';
import Search from '../../components/Search/Search';
import SearchResultList from './components/SearchResult/SearchResultList';
import FAQ from './components/FAQ/FAQ';
import Sponsor from './components/Sponsor';

export default function MainPage(){
    const [searchValue, setSearchvalue] = useState('')
    return(
    <>
        <img className={styles.img} src={hero} alt='hero'/>
        <Letters/>
        <Search
            value={searchValue}
            onValueChange={setSearchvalue}
        />
        <SearchResultList/>
        <FAQ/>
        <Sponsor/>
    </>
    )
}