import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'
import yt from '../../assets/icon-yt.svg'
import vk from '../../assets/icon-vk.svg'
import tg from '../../assets/icon-tg.svg'
import { MAIN_URL } from '../../utils/links'

export default function Footer(){
    return(
        <footer className={styles.container}>
            <div className={styles.text}>&copy; Копирайт 2022</div>
            <div className={styles.groupLink}>
                <Link to={{pathname: MAIN_URL}}>
                    Политика конфиденциальности
                </Link>
                <Link to={{pathname: MAIN_URL}}>
                    Политика cookie 
                </Link>
                <Link to={{pathname: MAIN_URL}}>
                    Отправить запрос
                </Link>
            </div>
            <div className={styles.groupSocial}>
                <a href="/" target='_blank'>
                    <img src={yt} alt="icon" />
                </a>
                <a href="/" target='_blank'>
                    <img src={vk} alt="icon" />
                </a>
                <a href="/" target='_blank'>
                    <img src={tg} alt="icon" />
                </a>
            </div>
        </footer>
    )
}