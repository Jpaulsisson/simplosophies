'use client'

import { initialBlogContent } from "@/utils";
import { BlogContent } from "@/utils/types";
import { useSession } from "next-auth/react";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  blogData: BlogContent;
  setBlogData: Dispatch<SetStateAction<BlogContent>>;
  username: string;
}

const initialState = {
  loading: false,
  setLoading: () => { },
  blogData: initialBlogContent,
  setBlogData: () => { },
  username: '',
}

export const GlobalContext = createContext<ContextType>(initialState)

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState(initialBlogContent);
  const [username, setUsername] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.name) {
      const name = session?.user?.name.split('_')[0]
      setUsername(name)
    }
  }, [session])

  return <GlobalContext.Provider value={{ loading, setLoading, blogData, setBlogData, username }}>{children}</GlobalContext.Provider>
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