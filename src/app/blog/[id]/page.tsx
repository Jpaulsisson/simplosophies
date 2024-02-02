'use client';

import Spinner from '@/components/Spinner';
import { useGlobalContext } from '@/context';
import { useParams } from 'next/navigation';
import React from 'react';
import styles from './Blog.module.css';
import Image from 'next/image';
import { handleDeletePost } from '@/utils/api-functions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteMutationVar } from '@/utils/types';

function BlogPage() {

  const { id } = useParams()
  const { username, posts } = useGlobalContext();
  const queryClient = useQueryClient();

  const blogData = posts.find(post => post.postId === id);

  const deletePostMutation = useMutation<Response, Error, DeleteMutationVar>({
    mutationFn: ({ id }) => handleDeletePost(id),
    onSuccess(data) {
      queryClient.invalidateQueries();
      console.log(`Deleted: ${data}`)
    },
    onError: () => console.log("something happened... something bad.")
  })

  function handleDelete(id: string) {
    deletePostMutation.mutate({
      id
    })
  }

  return (
    <>
      {blogData ?
        <>
          <div className={styles.container}>
            <div className={styles.headerImageContainer}>
              <Image src={blogData.image} alt='article image' className={styles.headerImage} width={900} height={900} />
              <a className={styles.photoCredit} href={`https://unsplash.com/@${blogData.photoCredit}`}>
                <h3>Photo by: {blogData.photoCredit}</h3>
              </a>
            </div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{blogData.title}</h2>
              <div className={styles.titleLine} />
            </div>
            <p className={styles.article}>{blogData.article}</p>
          </div>

          {username === 'Paul Sisson' &&
            <button onClick={() => handleDelete(id as string)}>Delete post</button>
          }
        </>
        :
        <Spinner visible={true} size='LG' />
      }
    </>
  )
}

export default BlogPage;
