'use server'
import { redirect } from "next/navigation"
export const createProject=async(data:FormData)=>{
    const blogData=Object.fromEntries(data.entries())
    const res=await fetch(`${process.env.SERVER_URL}/api/project/create-project`,
     {method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(blogData)
    })
    const project=await res.json()
    if(project.success){
        redirect('/project')
    }

    return project
}