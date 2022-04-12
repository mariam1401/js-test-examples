import styles from './loading.module.css'
import leaf from '../../../assets/images/Leaf.png'
import background from '../../../assets/images/Screenshot_1 1.svg'
import round1 from '../../../assets/images/amenatakin.png'
import round2 from '../../../assets/images/amenaverevin.png'
import round3 from '../../../assets/images/mejtexin.png'


const Loading =({second})=>{
    return(
        <div className={second < 0.001 ? `${styles.finish}` : `${styles.main_container}`}>
        {/*<div className={styles.main_container}>*/}

        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.container3}>
                        {/*<img src={round1} className={styles.round1} alt=''/>*/}
                        {/*<img src={round2} className={styles.round2} alt=''/>*/}
                        {/*<img src={round3} className={styles.round3} alt=''/>*/}
                    </div>
                </div>
            </div>
            <div className={styles.number}>{second.toFixed(1)}</div>
            <img src={leaf}  className={styles.leaf}/>
        </div>
           <img src={background} className={styles.backgroundImage}/>
        </div>

    )
}

export default Loading