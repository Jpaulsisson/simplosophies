'use client';

import Spinner from "@/components/Spinner";
import styles from './home.module.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [recents, setRecents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // populate recents
  })

  return (
    <main className={styles.container}>
      <section className={styles.welcomeContainer}>
        <h2 className={styles.welcome}>Hey there, welcome to Simplosophies.</h2>
        <p className={styles.subwelcome}>...it&apos;s basically my own personal LiveJournal.</p>
      </section>
      <section className={styles.recentPostsContainer}>
        {recents.length > 0 ?
          recents.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
            </div>
          ))
          : null}
      </section>
    </main>
  )
}
