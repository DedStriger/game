import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import { MAIN_URL, REGISTER_URL, SERVICE_URL, SINGIN_URL, CONTACT_URL, FINANCE_URL, BUY_URL, COMUNITY_URL } from '../../utils/links';
import tg from '../../assets/icon-tg.svg';
import tgG from '../../assets/icon-tg-gr.svg';
import tgB from '../../assets/icon-tg-bl.svg';
import ProfileCircle from './ProfileCircle';
import Language from './Language';
import Service from './Service';

export type HeaderProps = {
    auth? : boolean;
}

export default function Header({auth} : HeaderProps){
    const refHeader = useRef<HTMLDivElement>(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            
            window.pageYOffset > 0 ? refHeader.current?.classList.add('fixed') : refHeader.current?.classList.remove('fixed')
        }

        const handleClickOutside = (e: Event) => {
            {/*@ts-expect-error*/}
            if(!e.target.className || typeof(e.target.className) !== 'string'){
                return null
            }
            {/*@ts-expect-error*/}
            if(!e.target.className.match('menu') && !e.target.className.match('lang')){
                setShow(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])
    return(
        <header className={styles.container}>
            <div className={styles.top} ref={refHeader}>
                <Logo/>
                <svg width="36" onClick={() => setShow(!show)} className={styles.burger} height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 22C0 23.1046 0.895431 24 2 24H34C35.1046 24 36 23.1046 36 22V22C36 20.8954 35.1046 20 34 20H2C0.895431 20 0 20.8954 0 22V22ZM0 12C0 13.1046 0.895431 14 2 14H34C35.1046 14 36 13.1046 36 12V12C36 10.8954 35.1046 10 34 10H2C0.895431 10 0 10.8954 0 12V12ZM2 0C0.895431 0 0 0.895431 0 2V2C0 3.10457 0.895431 4 2 4H34C35.1046 4 36 3.10457 36 2V2C36 0.895431 35.1046 0 34 0H2Z" fill="white"/>
                </svg>

                <div className={styles.menu} style={show ? {transform: 'none'} : {}} >
                    <div className={styles.groupLink}>
                        <Link to={{pathname: MAIN_URL}} onClick={() => setShow(!show)}>
                            Главная
                        </Link>
                        <Service onClick={() => setShow(!show)}/>
                        <Link to={{pathname: CONTACT_URL}} onClick={() => setShow(!show)}>
                            Контакты
                        </Link>
                    </div>
                    <div className={styles.groupSocial} >
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
                        <a href='#' target='_blank'>
                            <img src={tg} className={styles.t} alt="icon" />
                            <img src={tgB} className={styles.b} alt="icon" />
                            <img src={tgG} className={styles.g} alt="icon" />
                        </a>
                    </div>
                    <div className={styles.groupBtn}>
                        {
                            auth ? (
                                <>
                                <Language />
                                <Link to={{pathname: BUY_URL}} onClick={() => setShow(!show)}>
                                    Покупки
                                </Link>
                                <Link to={{pathname: FINANCE_URL}} onClick={() => setShow(!show)}>
                                    Финансы
                                </Link>
                                <Link to={{pathname: COMUNITY_URL}} onClick={() => setShow(!show)}>
                                    Сообщения 
                                </Link>
                                <ProfileCircle hide={setShow}/>
                                </>
                            ) : (
                                <>
                                <Language />
                                <Link to={{pathname: REGISTER_URL}} onClick={() => setShow(!show)}>
                                    Регистрация
                                </Link>
                                <Link to={{pathname: SINGIN_URL}} onClick={() => setShow(!show)}>
                                    Вход 
                                </Link>
                                </>
                            )
                        }
                    </div>
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