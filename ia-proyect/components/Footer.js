import styles from '../styles/Footer/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className={styles.container}>
			<h1 className={styles['container__title']}>How does it work?</h1>
			<p className={styles['container__text']}>
				¡Solo pega el texto que deseas mejorar o escribe algo que quieras que
				mejore, y te proporcionaré una versión mejorada! 📝✨
			</p>
			<Link
				href={'/chat'}
				className={`${styles['container__goChat']} ${styles.unselected}`}
			>
				Go chat ✨
			</Link>
		</div>
	);
}
