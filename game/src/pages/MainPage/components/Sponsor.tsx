import spon1 from '../../../assets/spon1.svg'
import spon2 from '../../../assets/spon2.svg'
import spon3 from '../../../assets/spon3.svg'
import spon4 from '../../../assets/spon4.svg'

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '120px 0px',
        width: '100%'
    },
    item: {
        textAlign: 'center' as const
    },
    title: {
        marginTop: 20,
        fontFamily: 'Chakra Petch',
        fontWeight: 600,
        fontSize: 20,
        color: '#fff'
    }
}

export default function Sponsor(){
    return(
        <div style={styles.container}>
            <div style={styles.item}>
                <img src={spon1} alt="sponsor" />
                <div style={styles.title}>SANDBOX</div>
            </div>
            <div style={styles.item}>
                <img src={spon2} alt="sponsor" />
                <div style={styles.title}>Mines of Dalarnia</div>
            </div>
            <div style={styles.item}>
                <img src={spon3} alt="sponsor" />
                <div style={styles.title}>SPLINTERLANDS</div>
            </div>
            <div style={styles.item}>
                <img src={spon4} alt="sponsor" />
                <div style={styles.title}>Star Atlas</div>
            </div>       
        </div>
    )
}