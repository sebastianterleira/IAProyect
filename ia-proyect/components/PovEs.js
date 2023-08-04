import styles from '../styles/Pov/Pov.module.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const PovEs = () => {
	return (
		<section className={styles.center}>
			<div className={styles.button}>
				<a
					href={'https://github.com/sebastianterleira/IAProyect'}
					className={styles['button__link']}
				>
					TalkSavvy es de código abierto
					<BsArrowRightCircle className={styles["ArrowRightIcon"]}/>
				</a>
			</div>
			<h1 className={styles.title}>Mejora tu ingles con IA</h1>
			<div className={styles.container}>
				<p className={styles['container__subtitle']}>
					Hola! Soy tu asistente personal de IA, estoy aqui para ayudarte
					a practicar Ingles y prepararte para tus entrevistas.Juntos, mejoraremos tus habilidades
					y te apoyaré para que alcances tus metas. Vamos a lograrlo juntos!
				</p>
			</div>
		</section>
	);
};
export default PovEs;