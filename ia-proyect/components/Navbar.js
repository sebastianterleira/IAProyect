import styles from '../styles/Navbar/Navbar.module.css';
import Link from 'next/link';
import { poppins } from '../styles/fonts';

export default function Navbar() {
	return (
		<header className={styles.header}>
			<div className={styles['header__container']}>
				<Link href={"/"} className={`${styles['container__inicio']} ${poppins.className}`}>
					Inicio
				</Link>
				<div>
					<Link
						href={'/chat'}
						className={`${styles['container__goChat']} ${poppins.className} ${styles.unselected}`}
					>
						Go chat ✨
					</Link>
				</div>
			</div>
		</header>
	);
}
