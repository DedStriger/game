import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import { MAIN_URL, REGISTER_URL, SERVICE_URL, SINGIN_URL } from '../../utils/links';
import vkWhite from '../../assets/vk-white.svg';

export default function Header(){
    return(
        <header className={styles.container}>
            <div className={styles.top}>
                <Logo/>
                <div className={styles.groupLink}>
                    <Link to={{pathname: MAIN_URL}}>
                        Главная
                    </Link>
                    <Link to={{pathname: SERVICE_URL}}>
                        Сервис
                    </Link>
                    <Link to='/'>
                        Контакты
                    </Link>
                </div>
                <div className={styles.groupSocial}>
                    <a href='#' target='_blank'>
                        <img src={vkWhite} alt="icon" />
                    </a>
                    <a href='#' target='_blank'>
                        <img src={vkWhite} alt="icon" />
                    </a>
                    <a href='#' target='_blank'>
                        <img src={vkWhite} alt="icon" />
                    </a>
                    <a href='#' target='_blank'>
                        <img src={vkWhite} alt="icon" />
                    </a>
                </div>
                <div className={styles.groupBtn}>
                    <Link to={{pathname: MAIN_URL}}>
                        Язык
                    </Link>
                    <Link to={{pathname: REGISTER_URL}}>
                        Регистрация
                    </Link>
                    <Link to={{pathname: SINGIN_URL}}>
                        Вход 
                    </Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <a href="#" target='_blank'>P2E игры</a>
                <a href="#" target='_blank'>Игры</a>
                <a href="#" target='_blank'>Telegram</a>
                <a href="#" target='_blank'>Youtube</a>
            </div>
        </header>
    )
}