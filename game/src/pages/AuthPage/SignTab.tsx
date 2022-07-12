import styles from './AuthPage.module.scss'
import InputIcon from './InputIcon'
import {useState, useCallback, FormEvent} from 'react'
import user from '../../assets/man.svg'
import lock from '../../assets/lock.svg'
import google from '../../assets/google.svg'
import vk from '../../assets/vk-white.svg'
import steam from '../../assets/steam.svg'

export default function SignTab(){
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
    }, [])
    return(
        <form className={styles.body} onSubmit={handleSubmit}>
            <InputIcon
                value={name}
                onChange={setName}
                placeholder={'Имя пользователя'}
                icon={user}
            />
            <InputIcon
                value={pass}
                onChange={setPass}
                placeholder={'Пароль'}
                icon={lock}
                type='password'
            />
            <div className={styles.bodyRow}>
                <input type='checkbox' className={styles.radio} id='radio' />
                <label htmlFor='radio'>Запомнить меня</label>
            </div>
            <button className={styles.btn}  >Войти</button>
            <div className={styles.subtitle}>Войти с помощью соц. сетей:</div>
            <div className={styles.subtitleRow}>
                <a href="#">
                    <img src={vk} alt="icon" />
                </a>
                <a href="#">
                    <img src={google} alt="icon" />
                </a>
                <a href="#">
                    <img src={steam} alt="icon" />
                </a>
            </div>
        </form>
    )
}