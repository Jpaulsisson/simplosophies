import { useQuery } from "@tanstack/react-query";
import { BlogContent } from "./types"
import axios, { AxiosResponse } from "axios"

export async function getPosts() {
  try {
    const { data } = await axios('/api/posts/getAllPosts', { headers: { Accept: 'application/json' } });
    const posts = data.posts;
    return posts
  } catch (error) {
    console.error(error)
  }
}

export async function addPost(formData: BlogContent, userId: string) {
  try {
    const response = await axios.post(
      '/api/posts/createPost',
      { ...formData, userId },
      {
        headers:
          { Accept: 'application/json' }
      }
    );
    console.log(response);
    return response
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function deletePost(id: string): Promise<AxiosResponse<any, any>> {
  try {
    const response = await axios.delete(`/api/posts/deletePost?postId=${id}`)
    console.log(response)
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error)
  }
}

export async function getDateInfo(month: string | number, day: string | number): Promise<AxiosResponse<any, any>> {
  try {
    const { data } = await axios(`/api/dateInfo?month=${month}&day=${day}`);
    console.log(data);
    return data
  } catch (error) {
    console.error(error);
    return Promise.reject(error)
  }
}
