'use client'

import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components";
import { getPosts } from "@/utils/api-functions";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  username: string;
  posts: Blog[],
}

const initialState = {
  loading: false,
  setLoading: () => { },
  username: '',
  posts: [],
}

export const GlobalContext = createContext<ContextType>(initialState)

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.name) {
      const name = session?.user?.name.split('_')[0]
      setUsername(name)
    }
  }, [session])

  const { data: postsData, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  })

  useEffect(() => {
    if (postsData) {
      setPosts(postsData);
    }
  }, [postsData])

  if (isLoading) return <Spinner visible={true} size="XL" />
  if (error) return <Spinner visible={true} size="XL" color="crimson" />

  return <GlobalContext.Provider value={{ loading, setLoading, username, posts }}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
}