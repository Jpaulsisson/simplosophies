import { useGlobalContext } from '@/context'
import React, { useEffect, useState } from 'react'
import styles from './Random.module.css';




function Random() {

  const { posts } = useGlobalContext();
  const [random, setRandom] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const newRandom = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setRandom(Math.floor(Math.random() * posts.length));
      }, 400)
      setTimeout(() => {
        setFade(false);
      }, 800)
    }, 10000);
    return () => clearInterval(newRandom);
  }, [setRandom, posts.length]);

  return (
    <>
      {posts.length > 0 &&
        <div className={fade ? `${styles.content} ${styles.inactive}` : `${styles.content} ${styles.active}`}>
          <h2>- {posts[random].footnote}</h2>
          <p className={styles.title}>{posts[random].title}</p>
        </div>
      }
    </>
  )
}

export default Random
