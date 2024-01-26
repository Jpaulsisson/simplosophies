'use client';

import Spinner from '@/components/Spinner';
import { useGlobalContext } from '@/context';
import { BlogContent } from '@/utils/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
    console.log('deleted')
  }

  return (
    <div>
      {blogData ?
        <div>
          <h3>{blogData.title}</h3>
          <p>{blogData.article}</p>






          {username === 'Paul Sisson' &&
            <button onClick={() => handleDeletePost(blogId.id as string)}>Delete post</button>
          }

        </div>
        :
        <Spinner visible={true} />
      }
    </div>
  )
}

export default BlogPage;
