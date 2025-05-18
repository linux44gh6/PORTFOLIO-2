'use server'
export const createContact=async(data:FormData)=>{
    const contactData=Object.fromEntries(data.entries())
   const res=await fetch(`${process.env.SERVER_URL}/api/contact`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(contactData)
})
const contact=await res.json()
return contact
}   