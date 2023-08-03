import Pov from '@/components/Pov';
import Navbar from '../components/Navbar';
import styles from '../styles/Home/page.module.css';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Pov />
			</main>
		</>
	);
}
