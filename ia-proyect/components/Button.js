'use client';
import { useState } from 'react';
const Button = () => {
	const [language, setLanguage] = useState('es');
	const toggleLanguage = () => {
		setLanguage(language === 'es' ? 'en' : 'es');
	};
	return (
		<button onClick={toggleLanguage}>
			{language === 'es' ? 'English' : 'Español'}
		</button>
	);
};

export default Button;
