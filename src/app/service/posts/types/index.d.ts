export interface IPost {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export interface IPostData extends IPost {
  content: string;
}
