import { Blog } from '@/utils/types';
import Link from 'next/link';
import { useState } from 'react';
import styles from './recentCarousel.module.css';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

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
      <h2 className={styles.header}>Recent Posts</h2>
      <div className={styles.buttons}>
        <button style={{ all: "unset", display: "flex", alignItems: "center" }} onClick={handlePrev}>
          <FaCircleChevronLeft style={{ color: "var(--darkAccent)", height: 28, width: 28 }} />
        </button>
        {recentPosts.map((_, index) => {
          return (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              {
                index === activeIdx ?
                  <MdLightbulb style={{ color: 'var(--primaryAccent)', height: 20, width: 20 }} />
                  :
                  <MdLightbulbOutline style={{ color: '#222222', height: 12, width: 12 }} />
              }
            </div>
          )
        })}
        <button style={{ all: "unset", display: "flex", alignItems: "center" }} onClick={handleNext}>
          <FaCircleChevronRight style={{ color: "var(--darkAccent)", height: 28, width: 28 }} />
        </button>
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
