import { Link } from 'react-router-dom';
import { SINGIN_URL, REGISTER_URL } from '../../utils/links';
import styles from './AuthPage.module.scss'
import RegTab from './RegTab';
import SignTab from './SignTab';

export type AuthPageProps = {
    variant: AuthPageVariant;
}

export enum AuthPageVariant {
    Reg,
    Sign
}

export default function AuthPage({variant} : AuthPageProps){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.tab}>
                    <Link to={{pathname: SINGIN_URL}} className={variant === AuthPageVariant.Sign ? `${styles.tabItem} ${styles.tabItemActive}` : styles.tabItem}>Вход</Link>
                    <Link to={{pathname: REGISTER_URL}} className={variant === AuthPageVariant.Reg ? `${styles.tabItem} ${styles.tabItemActive}` : styles.tabItem}>Регистрация</Link>
                </div>
                {variant === AuthPageVariant.Reg ? (
                    <RegTab/>
                ) : (
                    <SignTab/>
                )}
            </div>
        </div>
    )
}