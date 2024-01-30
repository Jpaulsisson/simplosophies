import { Blog } from '@/utils/types';
import Link from 'next/link';
import styles from './recentCarousel.module.css';
import { useState } from 'react';
import ProgressTicker from '../ProgressTicker/ProgressTicker';


type RecentCarouselProps = {
  recentPosts: Blog[];
}

function RecentCarousel({ recentPosts }: RecentCarouselProps) {

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Recent Posts</h2>
      <div className={styles.progressTickerContainer}>
        <ProgressTicker length={recentPosts.length} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
      </div>
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
                <h2 className={styles.number}>{`˚•• - 0${activeIdx + 1}`}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
};

export default RecentCarousel; 
