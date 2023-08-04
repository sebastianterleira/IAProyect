"use client"
import Pov from '@/components/Pov';
import PovEs from '@/components/PovEs';
import Header from '../components/Header';
import styles from '../styles/Home/page.module.css';
import ExampleIA from '@/components/subcomponents/ExampleIA';
import { useState } from 'react';
import ExampleIAEs from '@/components/subcomponents/ExampleIAEs';


export default function Home() {
	const [showView, setShowView] = useState(false);

	const toggleView = () => {
		setShowView(!showView);
		console.log(showView);
	}
	return (
		<>
			<Header handleClick={toggleView}/>
			<main className={styles.main}>
				
				{showView ? <PovEs /> : <Pov />}
				{showView ? <ExampleIAEs /> : <ExampleIA />}
				
			</main>
		</>
	);
}
