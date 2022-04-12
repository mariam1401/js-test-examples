import React, {useRef, useState} from "react";
import styles from './menu.module.css'
import LanguageSwitcherSelector from "../../utilis/languages/component/languageSwitcher";
import screenIcon from "../../assets/images/Full_alt.svg";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import settingsIcon from "../../assets/images/Subtract.svg";
import {PopupInfo, PopupProven, PopupSettings} from "../popup/popup";
import informationIcon from "../../assets/images/Group 99.svg";
import {language} from "../../utilis/languages/languages";
import icon from "../../assets/images/Group 102.svg";
import useMediaQuery from "use-mediaquery";



const Menu =({lang,handleChangeLanguage,handle})=>{
    const smallScreen = useMediaQuery('(max-width: 900px)');
    const [isSettingOpen,setSettings]=useState(false);
    const [isProvenOpen,setProven]=useState(false);
    const [isInfoOpen,setInfo]=useState(false);
    // const ref =useRef();
    const fullScreen =()=>{
        if (window.screen.width === window.innerWidth && window.screen.height === window.innerHeight) {
            handle.exit()
        }
    };
    const toggleInfo=()=>{
        setInfo(!isInfoOpen)
    };
    const toggleProven =()=>{
        setProven(!isProvenOpen)
    };
    const toggleSetting = () => {
        setSettings(!isSettingOpen);
    };
    return(
        <div className={styles.menu}>
            <LanguageSwitcherSelector lang={lang} handleChangeLanguage={handleChangeLanguage}
            />
            <img
                src={icon}
                alt=''
                onClick={toggleProven}
                className={styles.proven}

            />
                {isProvenOpen && <PopupProven/>}

            <img
                src={screenIcon}
                alt=''
                onClick={fullScreen}
            />
                <OutsideClickHandler onOutsideClick={isSettingOpen && toggleSetting}>

                <img
                    src={settingsIcon}
                    alt=''
                    onClick={toggleSetting}
                    className={styles.settings}
                />
                {isSettingOpen && <PopupSettings/>}
            </OutsideClickHandler>

            <img
                src={informationIcon}
                alt=''
                onClick={toggleInfo}
            />
            {isInfoOpen && <PopupInfo close={toggleInfo}/>}
        </div>

    )
}

export default Menu