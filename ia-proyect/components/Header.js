
"use client"
import styles from '../styles/Navbar/Navbar.module.css';
import Link from 'next/link';
import ButtonLanguage from './ButtonLanguage';
import { useState } from 'react';
export default function Header({ handleClick }) {
	const [showView, setShowView] = useState(false);
	
	const toggleView = () => {
		setShowView(!showView);
		handleClick();
		console.log(showView);
	}
	return (
		<header className={styles.header}>
			<div className={styles['header__container']}>
				<Link href={'/'} className={`${styles['container__inicio']} `}>
					Home
				</Link>
				<div className={styles['subContainer']}>
					<ButtonLanguage onClick={toggleView} />
					<Link
						href={'/chat'}
						className={`${styles['container__goChat']} ${styles.unselected}`}
					>
						Go TalkSavvy ✨
					</Link>
				</div>
			</div>
		</header>
	);
}
