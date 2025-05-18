'use server'
const getAllContracts = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/api/contact`,{
        cache:"no-cache"
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }

    const blogs = await res.json();
    return blogs;
};

export default getAllContracts