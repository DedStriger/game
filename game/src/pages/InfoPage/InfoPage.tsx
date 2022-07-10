import styles from './InfoPage.module.scss'
import error from '../../assets/error.svg'
import success from '../../assets/success.svg'
import { Link } from 'react-router-dom'
import { MAIN_URL } from '../../utils/links'

export enum InfoPageVariant {
    Error,
    Success
}

export type InfoPageProps = {
    variant: InfoPageVariant
}

export default function InfoPage({variant} : InfoPageProps){
    return(
        <div className={styles.container} style={{color: variant === InfoPageVariant.Error ? '#FF0000' : '#069514'}}>
            <img 
             src= {
                variant === InfoPageVariant.Error ? error : success
             }
             className={styles.img} 
             alt='info'
            />
            {
                variant === InfoPageVariant.Error ? (
                    <>
                     <div className={styles.title}>ОШИБКА</div>
                     <div className={styles.text}>При обработки платежа произошла ошибка.</div>
                    </>
                ) : (
                    <>
                     <div className={styles.title}>УСПЕШНО</div>
                     <div className={styles.text}>Ваш платеж прошел успешно</div>
                    </>
                )
            }
            <Link to={{pathname: MAIN_URL}} className={styles.link}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5757 19.895L11.4917 20.979C11.0327 21.438 10.2905 21.438 9.83643 20.979L0.344238 11.4917C-0.114746 11.0327 -0.114746 10.2905 0.344238 9.83643L9.83643 0.344238C10.2954 -0.114746 11.0376 -0.114746 11.4917 0.344238L12.5757 1.42822C13.0395 1.89209 13.0298 2.64893 12.5562 3.10303L6.67236 8.7085H20.7056C21.355 8.7085 21.8774 9.23096 21.8774 9.88037V11.4429C21.8774 12.0923 21.355 12.6147 20.7056 12.6147H6.67236L12.5562 18.2202C13.0347 18.6743 13.0444 19.4312 12.5757 19.895Z" fill="white"/>
                </svg>
                Вернуться в магазин
            </Link>
        </div>
    )
}