'use server'
import { redirect } from "next/navigation"
export const createBlog=async(data:FormData)=>{
    const blogData=Object.fromEntries(data.entries())
    const res=await fetch(`${process.env.SERVER_URL}/api/blog/create-blog`,
     {method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(blogData)
    })
    const blog=await res.json()
    if(blog?.success){
        redirect('/blog')
    }

    return blog
}