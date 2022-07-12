import styles from './AuthPage.module.scss'
import InputIcon from './InputIcon'
import {useState, useCallback, FormEvent} from 'react'
import user from '../../assets/man.svg'
import lock from '../../assets/lock.svg'
import mailSvg from '../../assets/mail.svg'

export default function RegTab(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [passT, setPassT] = useState('')
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
                value={mail}
                onChange={setMail}
                placeholder={'Email'}
                icon={mailSvg}
                type='email'
            />
            <InputIcon
                value={pass}
                onChange={setPass}
                placeholder={'Пароль'}
                icon={lock}
                type='password'
            />
            <InputIcon
                value={passT}
                onChange={setPassT}
                placeholder={'Подтвердите пароль'}
                icon={lock}
                type='password'
            />
            <div className={styles.bodyRow}>
                <input type='checkbox' className={styles.radio} id='radio' />
                <label htmlFor='radio' style={{fontSize: 10}}>Я прочитал(а) и принимаю условия пользовательсткого соглашения</label>
            </div>
            <button className={styles.btn}  style={{marginBottom: 0}}>Регистрация</button>
            </form>
    )
}