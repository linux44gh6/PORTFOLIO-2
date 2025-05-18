"use server"
export const getBlogs = async () => {
    try {
        const res = await fetch(`${process.env.SERVER_URL}/api/blog`, {
            cache: "no-cache",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }

        const blogs = await res.json();
        return blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return []; 
    }
};
