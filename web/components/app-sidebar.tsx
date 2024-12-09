'use client'
import { Calendar, ChartPie, NotebookPen, Power, Settings, User } from "lucide-react"
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
import Link from 'next/link'

// Menu items.
const items = [
    {
        title: "পরিসংখ্যান",
        url: "stats",
        icon: ChartPie,
    },
    {
        title: "খবর অ্যাড করুন",
        url: "addNews",
        icon: NotebookPen,
    },
    {
        title: "সব খবর",
        url: "allNews",
        icon: Calendar,
    },
    {
        title: "ব্যবহারকারী",
        url: "users",
        icon: User,
    },
    {
        title: "সেটিংস",
        url: "settings",
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
                                        <Link href={`/${basePath}/${item.url}`}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
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