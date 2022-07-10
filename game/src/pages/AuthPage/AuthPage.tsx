import styles from './AuthPage.module.scss'

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
            {variant === AuthPageVariant.Reg ? 'reg' : 'sign'}
        </div>
    )
}