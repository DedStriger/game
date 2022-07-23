import { useEffect, useRef } from "react";
import { lettersMock } from "../../../../utils/mockData"
import styles from './Letter.module.scss'

export type LettersProps = {
    handleClick?: (letter: string) => void;
}

export default function Letters({handleClick} : LettersProps){

    const ref = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const top = ref.current?.getBoundingClientRect().top
        const handle = () => {
            if(top && (window.pageYOffset > top)) {
                ref.current?.classList.add('letter')
                {/*@ts-expect-error*/}
                ref.current.previousElementSibling.style.marginBottom = '78px'
            } else {
                 ref.current?.classList.remove('letter')
                 {/*@ts-expect-error*/}
                 ref.current.previousElementSibling.style.marginBottom = '0px'
            }
        }
        window.addEventListener('scroll', handle)

        return () => window.removeEventListener('scroll', handle)
    }, [])
    return(
        <div className={styles.container} ref={ref}>
            {
                lettersMock.map((item, index) => <div className={styles.item} onClick={() => handleClick && handleClick(item)} key={index}>{item}</div>)
            }
        </div>
    )
}