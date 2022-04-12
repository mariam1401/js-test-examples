import styles from './component.module.css'
import addIcon from '../assets/images/Add_round.png'
import minusIcon from '../assets/images/Vector 8.svg'
import useMediaQuery from "use-mediaquery";
import {createRef, useRef, useState} from "react";


const Betting =({increase,decrease,bet,coeff,value})=>{
    const coeffRef=useRef()
    console.log(coeffRef.current,'current')

    return(
<div className={styles.container}>
        <button className={styles.button}  onClick={decrease} value={e=>e.target.current}> <img src={minusIcon} alt='' className={styles.minus}/></button>
                           <span value={value} ref={coeffRef}>{bet ? bet : coeff}</span>
        <button className={styles.button} onClick={increase}> <img src={addIcon} alt='' className={styles.plus}/> </button>

    </div>
)
}

const Menu_mobile = ({image,text,color,padding,paddingBottom})=>(
    <div className={styles.menu_container}>
        <img src={image} alt='' style={{paddingLeft:padding}}/>
        <span style={{color,paddingBottom:paddingBottom}} className={styles.text}>{text}</span>
    </div>
)

const  Bet_div=({text1,text2})=>{
    const [active, setActive] = useState(1);
    const buttonIsActive =(index)=>{
        setActive(index)
    }
    // const smallScreen = useMediaQuery('(max-width: 750px)');
    return(
        <div className={styles.header}>
            <span
                  style={active === 1 ? {background:'rgba(33, 166, 250, 1)'} : {background:'transparent'}}
                  onClick={()=>buttonIsActive(1)}
            >{text1}</span>
            <span
                style={active === 2 ? {background:'rgba(33, 166, 250, 1)'} : {background:'transparent'}}
                onClick={()=>buttonIsActive(2)}
            >{text2}</span>
        </div>
    )
}


export {Betting,Menu_mobile,Bet_div}