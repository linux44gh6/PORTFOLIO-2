'use client'

import getAllContracts from "@/services/actions/getAllContact";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Contact } from "@/Types";
import { Button } from "@/components/ui/button";

const MessageInbox = () => {
    const [contact, setContact] = useState<Contact[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getAllContracts();
            setContact(res.data);
        };

        getData(); // Make sure to call the function
    }, []);

    console.log(contact);

    return (
        <div className=" mx-auto mt-20 md:mt-5 lg:mt-0 bg-white min-h-screen">
            <Table>
                <TableCaption>A list of your recent projects.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gradient-to-r from-color3 to-color4">
                        <TableHead className="w-[100px] text-gray-400">Client</TableHead>
                        <TableHead className="text-black">Email</TableHead>
                        <TableHead className="text-black">Message</TableHead>

                        <TableHead className="text-gray-400 text-right">Response</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contact?.map((project: Contact, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{project?.email}</TableCell>
                            <TableCell>
                                {project?.message}
                            </TableCell>
                            <TableCell className="text-right">
                                <Button className="bg-color4">
                                    Send Response
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default MessageInbox;
