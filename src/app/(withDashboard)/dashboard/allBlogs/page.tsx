"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "@/services/actions/getBlogs";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Blog } from "@/Types";
import Spinner from "@/components/ui/Sppiner";
import { deleteBlog } from "@/services/actions/DeleteBlog";

// Define the component with proper type annotations
const Page = () => {
    const [blogs, setBlogs] = useState<Blog[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs();
            setBlogs(data.data || []);
        };

        fetchBlogs();
    }, []); // Runs once on component mount

    if (!blogs) {
        return <Spinner />
    }
    const handelToDelete = async (id: string) => {
        setLoading(true)
        try {
            await deleteBlog(id);
            const data = await getBlogs();
            setBlogs(data.data || []);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false)
        }
    }
    if (loading) {
        return <Spinner />
    }
    return (
        <div className=" mx-auto mt-20 md:mt-5 lg:mt-0 bg-white min-h-screen">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gradient-to-r from-color3 to-color4">
                        <TableHead className="w-[100px] text-gray-400">Blog</TableHead>
                        <TableHead className="text-gray-400">Title</TableHead>
                        <TableHead className="text-gray-400">Author_name</TableHead>
                        <TableHead className="text-gray-400">Posted_date</TableHead>
                        <TableHead className="text-gray-400 text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.map((blog: Blog, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{blog?.title}</TableCell>
                            <TableCell>{blog?.author}</TableCell>
                            <TableCell>{blog?.date.slice(0, 10)}</TableCell>
                            <TableCell className="text-right">
                                <Button onClick={() => handelToDelete(blog._id)} className="bg-color4">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;
