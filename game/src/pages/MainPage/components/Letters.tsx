import { lettersMock } from "../../../utils/mockData"

const styles = {
    container: {
        paddingTop: 60,
        paddingBottom: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    item: {
        fontFamily: 'Source Sans Pro',
        color: '#BDBDBD',
        cursor: 'pointer',
        fontSize: 25
    }
}

export type LettersProps = {
    handleClick?: (letter: string) => void;
}

export default function Letters({handleClick} : LettersProps){
    return(
        <div style={styles.container}>
            {
                lettersMock.map((item, index) => <div style={styles.item} onClick={() => handleClick && handleClick(item)} key={index}>{item}</div>)
            }
        </div>
    )
}