"use server"
import type { User } from "@/Types"
import { cookies } from "next/headers"
import { jwtDecode } from "jwt-decode";
export const createUser=async(payload:Partial<User>)=>{
    const res=await fetch(`http://localhost:5000/api/auth/create-user`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
    })
    const result=await res.json()
    return result
}

export const loginUser=async(payload:Partial<User>)=>{
    const res=await fetch(`http://localhost:5000/api/auth/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
    })
    const result=await res.json()
    if(res.status===200){
        ((await cookies()).set('token',result.data.accessToken))
    }
    return result
}

export const logoutUser=async()=>{
    ((await cookies()).set('token',''))
}

export const getUser=async()=>{
    const token=((await cookies()).get('token'))?.value
    if(token){
        const decodedUser=jwtDecode(token)
        console.log(decodedUser);
        return decodedUser
    }
    return null
}