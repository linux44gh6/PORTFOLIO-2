'use server'
import { redirect } from "next/navigation"
export const createProject=async(data:FormData)=>{
    const res=await fetch(`${process.env.SERVER_URL}/api/project/create-project`,
     {method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const project=await res.json()
    if(project.success){
        redirect('/project')
    }

    return project
}