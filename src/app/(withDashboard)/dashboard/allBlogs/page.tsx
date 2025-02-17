
"use server"

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Blog } from "@/Types";
const page = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/api/blog`,
        {
            cache: "no-store" 
           });
   const blogs = await res.json();
    return (
        <div className="w-[90%] mx-auto py-5">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gradient-to-r from-color3 to-color4">
                        <TableHead className="w-[100px] text-gray-400">Blog</TableHead>
                        <TableHead className="text-gray-400">Title</TableHead>
                        <TableHead className="text-gray-400 ">Author_name</TableHead>
                        <TableHead className="text-gray-400 ">Posted_date</TableHead>
                        <TableHead className="text-gray-400  text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                   {
                    blogs.data.map((blog:Blog,index:number)=> <TableRow key={index}>
                    <TableCell className="font-medium">{index+1}</TableCell>
                    <TableCell>{blog?.title}</TableCell>
                    <TableCell>{blog?.author}</TableCell>
                    <TableCell>{blog?.date.slice(0,10)}</TableCell>
                    <TableCell className="text-right"><Button  className="bg-color4">Delete</Button></TableCell>
                </TableRow>)
                   }
                </TableBody>
            </Table>

        </div>
    );
};

export default page;
