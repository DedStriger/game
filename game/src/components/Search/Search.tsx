import styles from './Search.module.scss'
import icon from '../../assets/search.svg'

export type SearchProps = {
    value: string;
    onValueChange: (val: string) => void;
    placeholder?: string;
}

export default function Search({value, onValueChange, placeholder}:SearchProps){
    return(
        <div className={styles.container}>
            <input 
                className={styles.input} 
                placeholder={placeholder || 'Поиск...'} 
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
            <img className={styles.icon} src={icon} alt='icon'/>
        </div>
    )
}