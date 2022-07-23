import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import tgB from '../../assets/icon-tg-bl.svg'
import tgG from '../../assets/icon-tg-gr.svg'
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
                        <a href='#' target='_blank'>
                            <img src={tg} className={styles.t} alt="icon" />
                            <img src={tgB} className={styles.b} alt="icon" />
                            <img src={tgG} className={styles.g} alt="icon" />
                        </a>
                        <a href='#' target='_blank'>
                            <img src={tg} className={styles.t} alt="icon" />
                            <img src={tgB} className={styles.b} alt="icon" />
                            <img src={tgG} className={styles.g} alt="icon" />
                        </a>
                        <a href='#' target='_blank'>
                            <img src={tg} className={styles.t} alt="icon" />
                            <img src={tgB} className={styles.b} alt="icon" />
                            <img src={tgG} className={styles.g} alt="icon" />
                        </a>
            </div>
        </footer>
    )
}