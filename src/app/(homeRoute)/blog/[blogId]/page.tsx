import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogsSingle = async ({params}:{params:Promise<{blogId:string}>}) => {
    const {blogId} = await params
    const res=await fetch(`http://localhost:5000/api/blog/${blogId}`,{cache:'no-store'})
    const blog=await res.json()
    return (
        <div>
            <BlogDetailsCard blog={blog.data}/>
        </div>
    );
};

export default BlogsSingle;