'use client';

import styles from './home.module.css';
import { useEffect, useState } from "react";
import { Blog } from "@/utils/types";
import BlogCard from '@/components/BlogCard/BlogCard';

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
        <p className={styles.subwelcome}>...it&apos;s basically my own personal LiveJournal.</p>
      </section>
      <section className={styles.recentPostsContainer}>
        <h2 className={styles.recentHeader}>Recent Posts</h2>
        {recents ?
          recents.map((blog, idx) => (
            <BlogCard blog={blog} key={blog.postId} isEven={idx % 2 === 0} />
          ))
          : null}
      </section>
    </main>
  )
}
