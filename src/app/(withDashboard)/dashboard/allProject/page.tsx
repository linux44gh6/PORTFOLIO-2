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
import { Project } from "@/Types";
import Link from "next/link";
const page = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/api/project`,
        {
            cache: "no-store" 
           });
   const project = await res.json();
    return (
        <div className="w-[90%] mx-auto py-5">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gradient-to-r from-color3 to-color4">
                        <TableHead className="w-[100px] text-gray-400">Project</TableHead>
                        <TableHead className="text-gray-400">Title</TableHead>
                        <TableHead className="text-gray-400">Live_link</TableHead>
                        <TableHead className="text-gray-400">GITHUB_LINK</TableHead>
                        <TableHead className="text-gray-400 text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                   {
                    project.data.map((blog:Project,index:number)=> <TableRow key={index}>
                    <TableCell className="font-medium">{index+1}</TableCell>
                    <TableCell>{blog?.title}</TableCell>
                    <TableCell><Link href={blog?.live_link}>{blog?.live_link}</Link></TableCell>
                    <TableCell><Link href={blog?.github_link}>{blog?.github_link}</Link></TableCell>
                    <TableCell className="text-right"><Button  className="bg-color4">Delete</Button></TableCell>
                </TableRow>)
                   }
                </TableBody>
            </Table>

        </div>
    );
};

export default page;