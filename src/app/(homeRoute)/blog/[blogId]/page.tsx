import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
export const metadata = {
    title: "Blog Details",
    description: "Generated by Milon Hossain",
}
const BlogsSingle = async ({params}:{params:Promise<{blogId:string}>}) => {
    const {blogId} = await params
    const res=await fetch(`${process.env.SERVER_URL}/api/blog/${blogId}`,{cache:'no-store'})
    const blog=await res.json()
    return (
        <div className="p-1 md:p-5 lg:p-10 bg-gradient-to-b from-color2 to-color4">
            <BlogDetailsCard blog={blog.data}/>
        </div>
    );
};

export default BlogsSingle;