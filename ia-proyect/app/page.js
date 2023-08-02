import Navbar from '../components/Navbar'
import styles from '../styles/Home/page.module.css'
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar/>
        <Button />
    </main>
  )
}
