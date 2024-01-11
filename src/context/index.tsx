'use client'

import { initialNewBlogData } from "@/utils";
import { NewBlogData } from "@/utils/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  blogData: NewBlogData;
  setBlogData: Dispatch<SetStateAction<NewBlogData>>;
}



const initialState = {
  loading: false,
  setLoading: () => { },
  blogData: initialNewBlogData,
  setBlogData: () => { },
}



export const GlobalContext = createContext<ContextType>(initialState)



export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState(initialNewBlogData);


  return <GlobalContext.Provider value={{ loading, setLoading, blogData, setBlogData }}>{children}</GlobalContext.Provider>
}