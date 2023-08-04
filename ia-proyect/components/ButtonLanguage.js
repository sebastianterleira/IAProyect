 "use client"
 import { useState } from "react";
 import styles from '../styles/Button/ButtonLanguage.module.css';
 import Flags from "./Flags";
 const ButtonLanguage = ({onClick}) => {
    const [language, setLanguage] = useState('es');
    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
        onClick();
    };
    return (
        <button
            className={`${styles.button} ${language === 'en' ? styles['button--english'] : ''}`}
            onClick={toggleLanguage}
        >
            {language === 'es' ? (
                <Flags country="ES" />
          ) : (
                <Flags country="US" />
          )}
            {/* {language === 'es' ? 'Español' : 'English'} */}
        </button>
    )
};



export default ButtonLanguage