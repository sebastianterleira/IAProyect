import styles from '../styles/Navbar/Navbar.module.css';
import Link from 'next/link';
import ButtonLanguage from './ButtonLanguage';

export default function Navbar() {
	return (
		<header className={styles.header}>
			<div className={styles['header__container']}>
				<Link href={'/'} className={`${styles['container__inicio']} `}>
					Home
				</Link>
				<div className={styles['subContainer']}>
					<ButtonLanguage />
					<Link
						href={'/chat'}
						className={`${styles['container__goChat']} ${styles.unselected}`}
					>
						Go chat ✨
					</Link>
				</div>
			</div>
		</header>
	);
}
