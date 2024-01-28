import React, { useState } from 'react';
import styles from './recentCarousel.module.css';
import { Blog } from '@/utils/types';
import Link from 'next/link';

type RecentCarouselProps = {
  recentPosts: Blog[];
}

function RecentCarousel({ recentPosts }: RecentCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  function handleNext() {
    activeIdx < recentPosts.length - 1 ?
      setActiveIdx(prev => prev + 1)
      :
      setActiveIdx(0);
  }

  function handlePrev() {
    activeIdx > 0 ?
      setActiveIdx(prev => prev - 1)
      :
      setActiveIdx(recentPosts.length - 1);
  }

  return (
    <div className={styles.container}>
      <h2>Recent Posts</h2>
      <div className={styles.carouselContainer}>
        {recentPosts.map((post, index) => {
          return (
            <Link key={post.postId} href={`/blog/${post.postId}`}>
              <div style={{ backgroundImage: `url(${post.image})` }} className={index === activeIdx ? `${styles.postContainer} ${styles.active}` : `${styles.postContainer} ${styles.inactive}`}>
                <div className={styles.overlay} />
              </div>
              <div className={index === activeIdx ? `${styles.titleContainer} ${styles.active}` : `${styles.titleContainer} ${styles.inactive}`}>
                <h2 className={styles.title}>{post.title}</h2>
              </div>
              <div className={index === activeIdx ? `${styles.numberContainer} ${styles.active}` : `${styles.numberContainer} ${styles.inactive}`}>
                <h2 className={styles.number}>{`- - 0${activeIdx}`}</h2>
              </div>
            </Link>
          )
        })}
      </div>
      <div style={{ marginBlock: '150px' }}>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
};

export default RecentCarousel; 
