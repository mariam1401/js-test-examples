import {useState} from "react";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import Game_information from "./component/game_information/game_information";
import Game_div from "./component/Game_container/game_container";
import {Menu_mobile} from "../../component/component";
import styles from './hunting_game.module.css'
import playIcon from '../../assets/images/Vector 10.svg'
import betIcon from '../../assets/images/Vector 76.svg'
import statisticIcon from '../../assets/images/Pipe.svg'




const HuntingGame =({finish})=>{
    const [lang,setLang]=useState('am')
    const changeLanguageHandler = (lang) => {
        setLang(lang);
    }
    const handle = useFullScreenHandle();
    return(
        <>
            {finish &&
            <FullScreen handle={handle}>
                <div className={styles.main_container}>
                    <div className={styles.main_border}>
                        <Game_information handle={handle} handleLanguageChange={changeLanguageHandler} lang={lang}/>
                        <Game_div lang={lang}/>
                        {/*For mobile version*/}
                        <div className={styles.menu}>
                            <Menu_mobile image={playIcon} text='Game' color='#7CDE00' padding='8px'/>
                            <Menu_mobile image={betIcon} text='Bet'/>
                            <Menu_mobile image={statisticIcon} text='Statistics' paddingBottom='7px'/>
                        </div>
                    </div>
                </div>
            </FullScreen>
            }
            </>
    )
}

export default HuntingGame