"use server"
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/Types";

const Page = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/blog`, {
    cache: "no-store",
  });
const blogs=await res.json();
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] mx-auto py-10">
        {
            blogs.data.map((blog:Blog)=>{
                return <BlogCard blog={blog} key={blog._id}/>
            })
        }
    </div>
  );
};

export default Page;
