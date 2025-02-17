"use server"
export const getProject = async () => {
    try {
        const res = await fetch(`${process.env.SERVER_URL}/api/project`, {
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
