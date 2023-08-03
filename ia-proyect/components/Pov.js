import styles from '../styles/Pov/Pov.module.css';

const Pov = () => {
	return (
		<>
			<h1 className={styles.title}>Improve your English with AI</h1>
			<div className={styles.container}>
				<p className={styles['container__subtitle']}>
					Hi! I am your personal AI assistant, I am here to help you practice
					English, prepare for job interviews and achieve your goals together.
				</p>
			</div>
		</>
	);
};
export default Pov;
