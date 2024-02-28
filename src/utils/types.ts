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

type HistoricalDataList = {
  text: string;
  year: number;
  pages: {
    type: string;
    namespace: object;
    wikibase_item: string;
    titles: object;
    pageid: number;
    thumbnail: object;
    originalimage: object;
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: object;
    extract: string;
    extract_html: string;
  }[];
}[];

type HolidayData = Omit<HistoricalDataList[number], 'year'>[];

export type HistoricalData = {
  selected: HistoricalDataList;
  births: HistoricalDataList;
  deaths: HistoricalDataList;
  events: HistoricalDataList;
  holidays: HolidayData;
  };