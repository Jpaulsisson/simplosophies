// Custom types go here
export type BlogContent = {
  title: string;
  article: string;
  image: string;
  footnote: string;
  category: string;
  photoCredit: string;
}

export type Blog = {
  postId: string;
  title: string;
  createdAt: Date;
  article: string;
  image: string;
  footnote: string;
  category: string;
  userId: string;
  photoCredit: string;
}

export type MutationVariables = {
  formData: BlogContent;
  userId: string;
}

export type DeleteMutationVar = {
  id: string;
}

export type CountryCodes = {
  [key: string]: string;
}