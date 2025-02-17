"use client";

import { Calendar, Home, Inbox, Search, Settings, Menu } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Post-Blog", url: "/dashboard/post-blog", icon: Calendar },
  { title: "Post-Project", url: "/dashboard/project", icon: Search },
  { title: "Projects", url: "/dashboard/allProject", icon: Search },
  { title: "Blogs", url: "/dashboard/allBlogs", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const MySidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Button */}
      <div className="md:hidden p-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="p-2 rounded-md bg-gray-800 text-white">
            <Menu />
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Dashboard Menu</DialogTitle> 
            </DialogHeader>

            <SidebarContent className="bg-gradient-to-r from-color3 to-color4 text-white text-2xl">
              <SidebarGroup>
                <SidebarGroupLabel className="text-white text-4xl">Dashboard</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild onClick={() => setOpen(false)}>
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar>
          <SidebarContent className="bg-gradient-to-r from-color3 to-color4 text-white text-2xl">
            <SidebarGroup>
              <SidebarGroupLabel className="text-white text-4xl">Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
};

export default MySidebar;
