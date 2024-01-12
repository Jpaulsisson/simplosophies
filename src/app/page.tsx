'use client';

import Spinner from "@/components/Spinner";
import styles from './home.module.css';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className={styles.container}>
      <section className={styles.welcomeContainer}>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>it&apos;s basically my own personal LiveJournal.</p>
      </section>
      <section className={styles.recentPostsContainer}>

      </section>
    </main>
  )
}
