import styles from '../styles/Pov/Pov.module.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Pov = () => {
	return (
		<section className={styles.center}>
			<div className={styles.button}>
				<a
					href={'https://github.com/sebastianterleira/IAProyect'}
					className={styles['button__link']}
				>
					TalkSavvy is Open Source
					<BsArrowRightCircle className={styles["ArrowRightIcon"]}/>
				</a>
			</div>
			<h1 className={styles.title}>Improve your English with AI</h1>
			<div className={styles.container}>
				<p className={styles['container__subtitle']}>
					Hello! I&apos;m your personal AI assistant, here to help you practice
					English and prepare for job interviews. Together, we will improve your
					skills and I will provide you with the support you need to achieve
					your goals. Let&apos;s make it together!
				</p>
			</div>
		</section>
	);
};
export default Pov;
