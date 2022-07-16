import { CSSProperties, StyleHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import styles from './Chat.module.scss'

export type ChatProps = {
    value: string;
    onChange: (val: string) => void;
    setChat: (ch: chatType[]) => void;
    chat: chatType[];
    style?: CSSProperties;
}

export type chatType = {
    id: number;
    text: string;
}

export default function Chat({value, onChange, setChat, chat, style}: ChatProps){

    const ref = useRef<HTMLInputElement>(null)
    const refChat = useRef<HTMLDivElement>(null)

    const onClick = useCallback(() => {
        value !== '' && setChat([...chat, {id: new Date().getMilliseconds(), text: value}])
        onChange('')
    }, [onChange, setChat, value])


    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if(e.key === 'Enter'){
                onClick()
            }
        }

        window.addEventListener('keypress', handle)

        return () => window.removeEventListener('keypress', handle)
    }, [value])
    return(
        <div className={styles.container} style={style}>
            <div 
                className={`${styles.chat} ${ chat.length === 0 && styles.chatEmpty}`} 
                ref={refChat}
                style={{maxHeight: refChat.current?.clientHeight}}
            >
                {
                    chat.length > 0 ? (
                        
                            chat.map(item => (
                                <div key={item.id} className={styles.chatItem}>
                                    {item.text}
                                </div>
                            ))
                        
                    ) : (
                        <div className={styles.placeholder}>
                            Напишите продавцу<br/>перед оплатой
                        </div> 
                    )
                }
            </div>
            <div className={styles.chatContainer}>
                <input
                    placeholder='Написать...'
                    className={styles.chatInput}
                    value={value}
                    ref={ref}
                    onChange={(e) => onChange(e.target.value)}
                />
                <svg width="22" onClick={onClick}  height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.30176 1.42822L10.3857 0.344238C10.8447 -0.114746 11.5869 -0.114746 12.041 0.344238L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147H1.17188C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085H15.2051L9.32129 3.10303C8.84277 2.64893 8.83301 1.89209 9.30176 1.42822Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}