import styles from './game_container.module.css'
// import game from '../../../../assets/images/Screenshot_1 1.svg'
import {language} from "../../../../utilis/languages/languages";
import Bet_container from "../../../../component/bet_container/bet_container";
import Game from "./game";
import {useDispatch} from "react-redux";



const Game_div = ({lang})=> {
    // const dispatch = useDispatch();

    const getTranslation = (lang, text) => {
        return language[lang][text];
    }
    return (
        <div className={styles.container}>
            <Game  getTranslation={getTranslation} lang={lang}/>
            <div className={styles.game_settings}>
                <Bet_container getTranslation={getTranslation} lang={lang}/>
            </div>
        </div>
    )
}

export default Game_div