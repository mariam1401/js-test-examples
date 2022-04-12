import React, {useRef, useState} from "react";
import styles from './bet_container.module.css'
import classes from "../../container/Hunting_Game/component/Game_container/game_container.module.css";
import {Bet_div, Betting} from "../component";



const Bet_container=({getTranslation,lang,display})=>{
    const[bet,setBet]=useState(20)
    const[coeff,setCoeff]=useState(1.01)
    const ref = useRef()
    const increaseBet=()=>{
        setBet(bet + 1)
    }
    const decreaseBet=()=>{
        if(bet>20){
            setBet(bet - 1)
        }
    }
    const increaseCoeff=()=>{
        setCoeff(coeff + 0.1)
    }
    const decreaseCoeff=()=>{
        if(coeff>1.01){
            setCoeff(coeff - 0.1)
        }
    }


    return(
            <div className={classes.border} style={{display:display}}>
                <Bet_div text1={getTranslation(lang,'MECHANICAL')} text2={getTranslation(lang,'AUTOMATIC_TEXT')} />

                <div className={classes.bet_container}>
                    <div className={classes.firs_row}>
                        <div>
                            <span className={classes.title}>{getTranslation(lang,'BET_TEXT')}</span>
                            <Betting increase={increaseBet} bet={bet} decrease={decreaseBet}/>                        </div>
                        <div style={{color: '#A1AAA0'}}>
                            <span className={classes.title} style={{color:'#A1AAA0'}}>{getTranslation(lang,'AUTO_BET')}</span>
                            <Betting increase={increaseCoeff} value={coeff.toFixed(2)} coeff={coeff.toFixed(2)} decrease={decreaseCoeff}/>
                        </div>
                    </div>
                    <div className={classes.second_row}>
                        {[200,400,1000].map((number)=>{
                            return   <div style={{cursor:'pointer'}}>{number}</div>
                        })}

                    </div>
                    <div className={classes.third_row}>
                        <div>2x</div>
                        <div>{getTranslation(lang,'ALL_IN_TEXT')}</div>
                    </div>

                </div>
                <div className={classes.btn}>
                    <button className={classes.bet_btn}>{getTranslation(lang,'BET_TEXT')}</button>
                </div>
            </div>
    )
}
export default Bet_container