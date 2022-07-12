import styles from './ContactPage.module.scss'
import { useState, useCallback, FormEvent } from 'react'

export default function ContactPage(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [mess, setMess] = useState('')
    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
    }, [])
    return(
        <div className={styles.container}>
            <form className={styles.body} onSubmit={handleSubmit}>
                <div className={styles.title}>Форма обратной связи</div>
                <input 
                    className={styles.input} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Введите ваше имя'
                />
                <input 
                    className={styles.input} 
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type='email'
                    placeholder='Введите свой E-mail'
                />
                <input 
                    className={styles.input} 
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder='Введите номер телефона '
                />
                <textarea 
                    rows={4}
                    className={styles.input} 
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                    placeholder='Введите номер телефона '
                />
                <button className={styles.btn}>Отправить</button>
            </form>
        </div>
    )
}