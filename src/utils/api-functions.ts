import { BlogContent } from "./types"
import axios, { AxiosResponse } from "axios"

const holidayKey = process.env.HOLIDAYS_API_KEY as string;

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

export async function getHolidays(country: string, year: string, month: string, day: string) {
  const response = await axios.get(`https://holidays.abstractapi.com/v1/?api_key=${holidayKey}&country=${country}&year=${year}&month=${month}&day=${day}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}