export interface BlogPostOptions {
  page: number,
  per: number,
  totalPage: number
}

export interface BlogData {
  avatar: string,
  title: string,
  author: string,
  date: string,
  content: string,
  description: string,
  views: number,
  image?: string
}
