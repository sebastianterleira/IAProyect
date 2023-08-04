
import Pov from '@/components/Pov';
import Navbar from '../components/Navbar';
import styles from '../styles/Home/page.module.css';
import ExampleIA from '@/components/subcomponents/ExampleIA';



export default function Home() {
	
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Pov />
				
				<ExampleIA />
			</main>
		</>
	);
}
