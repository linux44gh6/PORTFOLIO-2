'use client'

import { deleteProject } from "@/services/actions/DeleteProject";
import { getProject } from "@/services/actions/getProject";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Sppiner";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Project } from "@/Types";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
    const [projects, setProjects] = useState<Project[]>([]); // Changed from setBlogs to setProjects
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProject();
            setProjects(data.data || []);
        };

        fetchProjects();
    }, []);

    // Display spinner if no projects are available yet
    if (projects.length === 0) {
        return <Spinner />;
    }

    const handleToDelete = async (id: string) => {
        setLoading(true);
        try {
            await deleteProject(id);
            const data = await getProject();
            setProjects(data.data || []); // Update the list after deletion
        } catch (error) {
            console.error("Error deleting project:", error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return <Spinner />;
    }

    return (
        <div className=" mx-auto mt-20 md:mt-5 lg:mt-0 bg-white min-h-screen">
            <Table>
                <TableCaption>A list of your recent projects.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gradient-to-r from-color3 to-color4">
                        <TableHead className="w-[100px] text-gray-400">Project</TableHead>
                        <TableHead className="text-gray-400">Title</TableHead>
                        <TableHead className="text-gray-400">Live Link</TableHead>
                        <TableHead className="text-gray-400">GitHub Link</TableHead>
                        <TableHead className="text-gray-400 text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects?.map((project: Project, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{project?.title}</TableCell>
                            <TableCell>
                                <Link href={project?.live_link}>{project?.live_link}</Link>
                            </TableCell>
                            <TableCell>
                                <Link href={project?.github_link}>{project?.github_link}</Link>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button onClick={() => handleToDelete(project._id)} className="bg-color4">
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;
