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

export type HolidayData = {
  name: string;
  name_local: string;
  language: string;
  description: string;
  country: string;
  location: string;
  type: string;
  date: string;
  date_year: string;
  date_month: string;
  date_day: string;
  week_day: string;
}