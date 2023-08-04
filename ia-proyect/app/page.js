
import Pov from '@/components/Pov';
import Header from '../components/Header';
import styles from '../styles/Home/page.module.css';
import ExampleIA from '@/components/subcomponents/ExampleIA';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Pov />
				<ExampleIA />
			</main>
			<Footer />
		</>
	);
}
