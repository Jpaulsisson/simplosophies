import { BlogContent } from "./types"
import axios from "axios"

export async function handleCreateNewPost(formData: BlogContent, userId: string) {
  const newPost = await fetch('/api/posts/createPost', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...formData,
      userId: userId,
    })
  })
  return newPost
}

export async function handleDeletePost(id: string) {
  const res = await fetch(`/api/posts/deletePost?postId=${id}`, { method: "DELETE" });
  const data = await res.json();
  return data;
}

export async function handleGetPosts() {
  const res = await fetch('/api/posts/getAllPosts')
  const posts = await res.json();
  return posts.data;
}