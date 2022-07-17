import spon1 from '../../../../assets/spon1.svg'
import spon2 from '../../../../assets/spon2.svg'
import spon3 from '../../../../assets/spon3.svg'
import spon4 from '../../../../assets/spon4.svg'
import styles from './Sponsor.module.scss'



export default function Sponsor(){
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <img src={spon1} className={styles.img} alt="sponsor" />
                <div className={styles.title}>SANDBOX</div>
            </div>
            <div className={styles.item}>
                <img src={spon2} alt="sponsor" className={styles.img} />
                <div className={styles.title}>Mines of Dalarnia</div>
            </div>
            <div className={styles.item}>
                <img src={spon3} alt="sponsor" className={styles.img} />
                <div className={styles.title}>SPLINTERLANDS</div>
            </div>
            <div className={styles.item}>
                <img src={spon4} alt="sponsor" className={styles.img} />
                <div className={styles.title}>Star Atlas</div>
            </div>       
        </div>
    )
}