import styles from './user_information.module.css'

const Info_container = ({user,bet,coeff,win,img})=>(
    <div className={styles.container}>
        <span>{user}</span>
        {bet &&  <span className={styles.sum}>{bet}</span>}
        <span className={coeff ? `${styles.coeff}` : `${styles.coeffNan}`}>{coeff} </span>
        <span>{win} <img src={img} alt=''/></span>
    </div>
)

export  {Info_container}