import { Blog } from '@/utils/types';
import Link from 'next/link';
import React from 'react';
import styles from './BlogCard.module.css';
import Image from 'next/image';

function BlogCard(props: { blog: Blog; isEven?: boolean; key?: string }) {
  const { blog, isEven, key } = props;
  return (
    <Link href={`/blog/${blog.postId}`} className={`${styles.container} ${isEven ? styles.isEven : styles.notEven}`} key={key}>
      <h2>{blog.title}</h2>
      <div className={styles.overlay}>
        <Image className={styles.image} src={blog.image} alt='blog image' width={100} height={100} />
      </div>
    </Link>
  );
}


export default BlogCard;