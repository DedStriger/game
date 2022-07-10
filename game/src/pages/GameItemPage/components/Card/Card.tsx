import styles from './Card.module.scss'

export type CardProps = {
    imgBig : string;
    name: string;
    description: string;
    tags: string;
}

export default function Card({imgBig, name, description, tags}: CardProps){
    return(
        <div className={styles.container}>
            <img className={styles.img} src={imgBig} alt="avatar" />
            <div>
                <div className={styles.title}>{name}</div>
                <div className={styles.text}>{description}</div>
                <div className={styles.itemContainer}>
                    {
                        tags.split(',').map((item, index) => (
                            <div className={styles.item} key={index} onClick={() => {}}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}