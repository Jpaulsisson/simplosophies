'use client';

import Spinner from "@/components/Spinner";
import styles from './home.module.css';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className={styles.container}>
      <section>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>where I deep dive into my everyday thoughts and ask for your thoughts about them.</p>
      </section>
      <section className={styles.recentPostsContainer}>

      </section>
    </main>
  )
}
