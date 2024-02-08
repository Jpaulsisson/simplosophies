'use client';

import styles from './home.module.css';
import { Random, RecentCarousel } from '@/components';
import { useGlobalContext } from '@/context';
import Link from 'next/link';

export default function Home() {

  const { posts } = useGlobalContext();
  const recents = posts.slice(0, 6);

  return (
    <main className={styles.container}>
      <section className={styles.welcomeContainer}>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>...it&apos;s basically my personal LiveJournal.</p>
      </section>
      <section className={styles.discoverContainer}>
        <Link href={'/discover'}>
          <h2 className={styles.discoverHeader}>Discover</h2>
        </Link>
        <p>Step into a world beyond your routine, where everyday experiences take on a new hue. Break away from the usual and explore opportunities both locally and beyond. Looking for ideas? Visit the &quot;Discover&quot; feature on my website, a practical tool offering a variety of suggestions for enjoyable activities in your area and beyond. Whether it&apos;s checking out local events, trying new eateries, or engaging in community activities, this feature provides a down-to-earth guide for making the most of your time. As you navigate through these ideas, consider the liberating concept of putting aside screens and phones. Embrace tangible moments, real-world connections, and the simple joys that await when we detach from the digital realm. Let the practicality of local suggestions and the freedom from screens guide your next move, turning your free time into a chance to discover both the authentic experiences around you and those waiting in unexplored territories. Your next great adventure might just be a click away, leading you to a world beyond the confines of the digital screen.</p>
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


// TODO: ADD MORE CONTENT OF SOME KIND