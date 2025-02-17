export type TBlog={
    title:string,
    description:string,
    created_at:string,
    updated_at:string,
    image:string,
    date:string
    author:string,
    image_id:string,
}|null

export interface Blog {
    _id: string;
    title: string;
    description: string;
   date: string;
    name: string;
    image: string;
    likes: string;
    author: string;
  }
  
  export interface Project {
    _id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    github_link: string;
    live_link: string;
  }