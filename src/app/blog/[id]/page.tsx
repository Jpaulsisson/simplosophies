'use client';

import Spinner from '@/components/Spinner';
import { useGlobalContext } from '@/context';
import { BlogContent } from '@/utils/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import Image from 'next/image';

function BlogPage() {

  const blogId = useParams()
  const { username } = useGlobalContext();
  const [blogData, setBlogData] = useState<BlogContent | null>();

  useEffect(() => {
    async function getBlogData(id: string) {
      const res = await fetch(`/api/posts/getPost?postId=${id}`)
      const data = await res.json();
      setBlogData(data.data);
    }
    getBlogData(blogId.id as string)
  }, [blogId])

  async function handleDeletePost(id: string) {
    const res = await fetch(`/api/posts/deletePost?postId=${id}`, { method: "DELETE" });
    const data = await res.json();
  }

  return (
    <>
      {blogData ?
        <>
          <div className={styles.container}>
            <div className={styles.headerImageContainer}>
              <Image src={blogData.image} alt='article image' className={styles.headerImage} width={900} height={900} />
            </div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{blogData.title}</h2>
              <div className={styles.titleLine} />
            </div>
            <p className={styles.article}>{blogData.article}</p>
          </div>

          {username === 'Paul Sisson' &&
            <button onClick={() => handleDeletePost(blogId.id as string)}>Delete post</button>
          }
        </>
        :
        <Spinner visible={true} />
      }
    </>
  )
}

export default BlogPage;
