'use client';
import { useState } from 'react';
import styles from '../../styles/Button/Button.module.css';
const ButtonLenguaje = () => {
	const [language, setLanguage] = useState('es');
	const toggleLanguage = () => {
		setLanguage(language === 'es' ? 'en' : 'es');
	};
	return (
		<button
			className={`${styles.button} ${
				language === 'en' ? styles['button--english'] : ''
			}`}
			onClick={toggleLanguage}
		>
			{language === 'es' ? 'English' : 'Español'}
		</button>
	);
};

export default ButtonLenguaje;
