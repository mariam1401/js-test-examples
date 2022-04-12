import styles from './popup.module.css'
import closeIcon from '../../assets/images/Close_round.svg'
import Switch from "react-switch";
import {useEffect, useRef, useState} from "react";



const PopupSettings = () =>{
    const[switched,setSwitched]=useState(false)
    const[switchedMusic,setSwitchedMusic]=useState(false)

    return(

        <div className={styles.container}>
                <div className={styles.first_row1}>
                    <span className={styles.header}>Ձայն</span>
                    <Switch onChange={()=>setSwitched(!switched)} checked={switched}
                            // width='24px'
                            // height='35px'
                            // handleDiameter={5}

                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor='#02203A'
                            offColor='#02203a'
                            borderRadius='50px'
                            offHandleColor='#344E65'
                            onHandleColor='#0AFF00'
                            height={17}
                            width={30}



                    />
                </div>
                <div className={styles.first_row1} >
                    <span className={styles.header}>Երաժշտություն</span>
                    <Switch onChange={()=>setSwitchedMusic(!switchedMusic)}
                            checked={switchedMusic}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor='#02203A'
                            offColor='#02203a'
                            borderRadius={40}
                            offHandleColor='#344E65'
                            onHandleColor='#0AFF00'
                            height={17}
                            width={30}



                    />
                </div>

        </div>

    )

}

const PopupProven=()=>(
    <div className={styles.container2}>
        <span className={styles.text}>
            Ինչ է Ապացուցելի Արդարությունը
        </span>
        <span className={styles.text}>
             Ապացուցելի Արդարության Հաշվիչ
        </span>
    </div>
)
const PopupInfo=({close})=>(
    <div className={styles.main_container}>
        <div className={styles.container3}>
    <div className={styles.info_container}>
        <div className={styles.info_header}>
            What is Lorem Ipsum?
        </div>
        <div className={styles.first_row}>
            <header className={styles.title}>Lorem Ipsum</header>
            <span>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book.
            </span>
        </div>
        <div className={styles.second_row}>
            <header className={styles.title}>Lorem Ispum</header>
            <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
        </div>
        <div className={styles.third_row}>
            <header className={styles.title}>Lorem Ispum</header>
            <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
        </div>
        <div className={styles.fourth_row}>
            <span>*Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
            </span>
            <span>*Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
            </span>
            <span>*Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
            </span>
        </div>
        </div>
      <div className={styles.close_btn} onClick={()=>close()}>
          <img src={closeIcon} className={styles.closeIcon}/>
      </div>
    </div>
    </div>
)


export {PopupSettings,PopupProven,PopupInfo}