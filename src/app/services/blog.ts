export interface blogPostOptions {
  page: number;
  per: number;
  totalPage: number;
}

export interface blogData {
  avatar: string;
  title: string;
  author: string;
  date: string;
  content: string;
  description: string;
  views: number;
  image?: string;
}
