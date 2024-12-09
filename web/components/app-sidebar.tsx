'use client'
import { Calendar, ChartPie, NotebookPen, Power, Search, Settings } from "lucide-react"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { signOut } from 'next-auth/react'

// Menu items.
const items = [
    {
        title: "Statistics",
        url: "stats",
        icon: ChartPie,
    },
    {
        title: "Add News",
        url: "addNews",
        icon: NotebookPen,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const pathname = usePathname()

    // Get the base path (e.g., /dashboard)
    const basePath = pathname.split("/")[1]

    return (
        <Sidebar className='mt-16'>
            <SidebarTrigger className='absolute top-0 -right-6 z-50' />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>ড্যাশবোর্ড</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={`/${basePath}/${item.url}`}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <p
                                        onClick={() => signOut()}
                                        className='flex items-center cursor-pointer'
                                    ><Power />Logout</p>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}