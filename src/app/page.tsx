'use client';

import styles from './home.module.css';
import { Random, RecentCarousel } from '@/components';
import { useGlobalContext } from '@/context';

export default function Home() {

  const { posts } = useGlobalContext();
  const recents = posts.slice(0, 6);

  return (
    <main className={styles.container}>
      <section className={styles.welcomeContainer}>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>...it&apos;s basically my personal LiveJournal.</p>
      </section>
      <section>
        <RecentCarousel recentPosts={recents} />
      </section>
      <section>
        <Random />
      </section>
    </main>
  )
}


// TODO: CONVERT FETCH CALLS TO AXIOS CALLS <-- it's already installed
// TODO: ADD MORE CONTENT OF SOME KIND