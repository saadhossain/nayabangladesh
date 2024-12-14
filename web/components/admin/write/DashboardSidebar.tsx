'use client'
import { ChartColumnStacked, ChartPie, Newspaper, NotebookPen, Power, Settings, Tags, User } from "lucide-react"

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
import { usePathname } from 'next/navigation'

// Menu items.
const items = [
    {
        title: "পরিসংখ্যান",
        url: "/",
        icon: ChartPie,
    },
    {
        title: "নতুন খবর",
        url: "addNews",
        icon: NotebookPen,
    },
    {
        title: "সব খবর",
        url: "allNews",
        icon: Newspaper,
    },
    {
        title: "ক্যাটেগরি",
        url: "category",
        icon: ChartColumnStacked,
    },
    {
        title: "ট্যাগসমূহ",
        url: "tags",
        icon: Tags,
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

export function DashboardSidebar() {
    const pathName = usePathname();
    return (
        <Sidebar className='mt-16'>
            <SidebarTrigger className='absolute top-0 -right-6 z-50' />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className='text-xl font-semibold text-gray-900 border-b-2 border-gray-300 rounded-none pb-2 mb-2'>ড্যাশবোর্ড</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={`/dashboard/${item.url}`}
                                            className={`font-semibold hover:text-secondary duration-200 ease-in-out ${pathName.includes(item.url) ? 'text-secondary' : 'text-primary'}`}
                                        >
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
                                    ><Power />লগআউট</p>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}