import { useCallback, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Input from './Input';
import styles from './OrderPage.module.scss'
import { historyReviewMock } from '../../utils/mockData';
import HistoryItem from './HistoryItem';
import Chat, { chatType } from '../../components/Chat/Chat';
import { Link } from 'react-router-dom';
import { COMFIRM_URL, MAIN_URL } from '../../utils/links';

export default function OrderPage(){
    const location = useLocation<{back: string; game: string; avatar: string; nikname: string}>()
    const history = useHistory()
    const onBack = useCallback(() => {
        history.go(-1)
    }, [history])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('0')
    const [count, setCount] = useState('0')
    const [selectText, setSelectText] = useState('Выберите способ платежа')
    const [showList, setShowList] = useState(false)
    const [chat, updateChat] = useState<chatType[]>([])
    const handleListClick = (val: string) => {
        setSelectText(val)
        setShowList(false)
    }
    const [mess, setMess] = useState('')

    if(!!!location.state){
        history.replace({pathname: MAIN_URL})
        return null
    }

    return(
        <div className={styles.container}>
            <button className={styles.back} onClick={onBack}>
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.340492 6.70337L6.92047 0.330366C7.37527 -0.110122 8.11067 -0.110122 8.56063 0.330366L9.65407 1.38941C10.1089 1.8299 10.1089 2.54217 9.65407 2.97798L4.99486 7.5L9.65891 12.0173C10.1137 12.4578 10.1137 13.1701 9.65891 13.6059L8.56547 14.6696C8.11067 15.1101 7.37527 15.1101 6.92531 14.6696L0.34533 8.29663C-0.114301 7.85614 -0.114301 7.14386 0.340492 6.70337Z" fill="white"/>
                </svg>
                <span>{location.state.back || 'Назад'}</span>
            </button>
            <div className={styles.title}>{location.state.game || ''}</div>
            <div className={styles.content}>
                <div>
                    <div className={styles.table}>
                        <div className={styles.tableHeader}>
                            <span>Игра:</span>
                            <span>Категория:</span>
                            <span>Сторона:</span>
                            <span>Сервер:</span>
                            <span>Количество:</span>
                        </div>
                        <div className={styles.tableRow}>
                            <span>AION</span>
                            <span>Кинары</span>
                            <span>Асмодиане</span>
                            <span>Нортика</span>
                            <span>500кк</span>
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <Input
                            label='Имя персонажа'
                            placeholder='Введите имя персонажа...'
                            value={name}
                            onChange={setName}
                            id='name'
                        />
                        <Input
                            label='Заплачу'
                            placeholder='0'
                            value={price}
                            onChange={setPrice}
                            id='price'
                        />
                        <Input
                            label='Получу'
                            placeholder='0'
                            value={count}
                            onChange={setCount}
                            id='count'
                        />
                    </div>
                    <div className={styles.buy}>
                        <div className={styles.label}>
                            Способ оплаты
                        </div>
                        <div className={styles.buyContent}>
                            <div className={styles.select} onClick={() => setShowList(!showList)}>
                                <span>{selectText}</span>
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2759 1.44775C15.7349 1.90674 15.7349 2.64893 15.2759 3.10303L8.63525 9.74365C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365Z" fill="white"/>
                                </svg>
                            </div>
                        {showList &&
                            <div className={styles.selectList}>
                                <li onClick={() => handleListClick('Банковская карта')}>Банковская карта</li>
                                <li onClick={() => handleListClick('QIWI')}>QIWI</li>
                                <li onClick={() => handleListClick('СБП')}>СБП</li>
                                <li onClick={() => handleListClick('Криптовалюта')}>Криптовалюта</li>
                            </div>
                        }
                            <Link to={{pathname: COMFIRM_URL, state: location.state}} className={styles.selectBtn}>
                                Купить
                            </Link>
                        </div>
                    </div>
                    <div className={styles.history}>
                        <div className={styles.historyTitle}>{historyReviewMock.length} отзыва</div>
                        {
                            historyReviewMock.map(item => (
                                <HistoryItem key={item.id} {...item}/>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.chat}>
                    <div className={styles.chatHeader}>
                        <img src={location.state.avatar} alt='avatar'/>
                        <div>
                            <div className={styles.chatName}>{location.state.nikname || 'nick'}</div>
                            <div className={styles.chatStatus}>Online</div>
                        </div>
                    </div>
                    <Chat
                        value={mess}
                        onChange={setMess}
                        chat={chat}
                        setChat={updateChat}
                    />
                </div>
            </div>
        </div>
    )
}