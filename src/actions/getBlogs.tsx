'use server'
const getBlogs = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/api/blog`,
         {
             cache: "no-store" 
            });
    const blogs = await res.json();
    return blogs;
  };
  export default getBlogs