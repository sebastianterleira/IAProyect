import styles from '../styles/Footer/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className={styles.container}>
			<h1 className={styles['container__title']}>How does it work?</h1>
			<p className={styles['container__text']}>
				Just paste the text you want to improve or write something you want to
				improve, and I&apos;ll provide you with an improved version! Just start a
				conversation with TalkSavvy, answer the questions to get feedback, and
				let&apos;s get better Together! 📝✨
			</p>
			<Link
				href={'/chat'}
				className={`${styles['container__goChat']} ${styles.unselected}`}
			>
				Go TalkSavvy ✨
			</Link>
		</div>
	);
}
