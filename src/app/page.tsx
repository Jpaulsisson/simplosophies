'use client';

import Spinner from "@/components/Spinner";
import styles from './home.module.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  postId: string;
  title: string;
  createdAt: Date;
  article: string;
  image: string;
  footnote: string;
  category: string;
  userId: string;
}

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
        {recents.length > 0 ?
          recents.map((blog) => (
            <Link href={`/blog/${blog.postId}`} className={styles.blogCard} key={blog.postId}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <Image className={styles.blogImage} src={blog.image} alt={blog.title} width={150} height={120} />
            </Link>
          ))
          : null}
      </section>
    </main>
  )
}
