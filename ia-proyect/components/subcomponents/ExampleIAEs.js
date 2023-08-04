import styles from '../../styles/ExampleIA/ExampleIA.module.css';
import { BsFillChatDotsFill } from 'react-icons/bs';

const ExampleIAEs = () => {
	return (
		<>
			<section className={styles.container}>
				<div className={styles['container__column']}>
					<div className={styles['column__card']}>
						<p className={styles['column__text']}>Haz una pregunta</p>
						<div className={styles['column__content']}>
							Inscríbete gratis a nuestro próximo taller de repostería. Será
							este sábado a partir de las 10 de la mañana. Veremos las bases de
							este tema y aprenderás a hacer cosas básicas. ¡ Te esperaremos!
						</div>
					</div>
					<div className={styles['column__icon']}>
						<p className={styles['column__text']}>
							<BsFillChatDotsFill className={styles.MessageIcon}/>
						</p>
					</div>
					<div className={styles['column__card']}>
						<p className={styles['column__text']}>Recibe retroalimentación</p>
						<div className={styles['column__content']}>
							Inscríbete gratis a nuestro próximo taller de repostería. Será
							este sábado a partir de las 10 de la mañana. Veremos las bases de
							este tema y aprenderás a hacer cosas básicas. ¡ Te esperaremos!
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ExampleIAEs;
