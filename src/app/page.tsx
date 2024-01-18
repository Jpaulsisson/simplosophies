'use client';

import Spinner from "@/components/Spinner";
import styles from './home.module.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [recents, setRecents] = useState([]);
  const router = useRouter();

  async function handleGetPosts() {
    const res = await fetch('/api/posts/getAllPosts')
    const posts = await res.json();
    console.log(posts.data);
  }

  useEffect(() => {
    // populate recents
    const posts = handleGetPosts();
    console.log(posts);
  }, [])

  return (
    <main className={styles.container}>
      <section className={styles.welcomeContainer}>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>...it&apos;s basically my own personal LiveJournal.</p>
      </section>
      <section className={styles.recentPostsContainer}>
        {/* get blog data stored in PostgreSQL and pull it */}
        {/* {recents.length > 0 ?
          recents.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
            </div>
          ))
          : null} */}
      </section>
    </main>
  )
}
