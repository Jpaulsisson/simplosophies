'use client';

import styles from './home.module.css';
import { useEffect, useState } from "react";
import { Blog } from "@/utils/types";
import RecentCarousel from '@/components/RecentCarousel/recentCarousel';

export default function Home() {

  const [recents, setRecents] = useState<Blog[]>([]);

  async function handleGetPosts() {
    const res = await fetch('/api/posts/getSixPosts')
    const posts = await res.json();
    return posts.data;
  }

  useEffect(() => {
    async function getPosts() {
      const posts = await handleGetPosts();
      setRecents(posts);
    }
    getPosts();
  }, [])

  return (
    <main className={styles.container}>
      <section className={styles.welcomeContainer}>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>...it&apos;s basically my personal LiveJournal.</p>
      </section>
      <section>
        <RecentCarousel recentPosts={recents} />
      </section>
    </main>
  )
}