'use server'
export const deleteProject = async (id: string) => {
    try {
        const res = await fetch(`${process.env.SERVER_URL}/api/project/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({id})
        });

        if (!res.ok) {

            throw new Error(`Failed to delete blog: ${res.statusText}`);
        }

        const result = await res.json(); 
        return result;
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw error; 
    }
};
