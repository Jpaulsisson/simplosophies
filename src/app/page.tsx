import Spinner from "@/components/Spinner";
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <section>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>where I deep dive into my everyday thoughts and ask for your thoughts about them.</p>
      </section>
    </main>
  )
}
