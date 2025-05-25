/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
export const createContact=async(data:any)=>{

   const res=await fetch(`${process.env.SERVER_URL}/api/contact`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
const contact=await res.json()
return contact
}   