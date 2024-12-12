"use client"
import { getCategory } from '@/app/utils/apis'
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { CategoryType } from '@/types/newsTypes'
import { useQuery } from '@tanstack/react-query'
import { Menu } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import logo from '../public/images/nayabangladesh logo.png'
import MobileNav from './MobileNav'
import { ModeToggle } from './theme-toggle'
import { buttonVariants } from './ui/button'



const NavBar = () => {
    const { data: session } = useSession();
    const [progress, setProgress] = useState(0)
    const pathname = usePathname();

    // This runs whenever page changes to some other page
    useEffect(() => {
        setProgress(30)

        setTimeout(() => {
            setProgress(70)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 800);

    }, [pathname])

    // This runs whenever page loads
    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 900);
    }, [])
    //Get categories from the Server
    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategory
    })

    return (
        <nav className='container mx-auto h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10'>
            <LoadingBar
                color='#6028ff'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className='text-lg font-bold md:text-xl w-52'>
                <Link href={"/"}>
                    <Image src={logo} alt='Naya Bangladesh' />
                </Link>
            </div>
            <ul className='hidden md:flex gap-2 w-full justify-end items-center text-sm font-semibold'>

                {
                    categories?.map((category: CategoryType) => <li
                        key={category._id}
                        className={`${pathname === `/${category.slug}` ? 'text-secondary' : 'text-primary'} hover:text-secondary duration-300 ease-in-out`}
                    >
                        <Link href={`/${category.slug}`}>{category.name}</Link>
                    </li>
                    )
                }
                <div className='ml-2'>
                    {
                        session ? <Link href={"/dashboard"}>
                            <Image src={session?.user?.image} alt='Dashboard' width={32} height={32} className='h-8 w-8 rounded-full' />
                        </Link>
                            :
                            <li className='buttons px-4 space-x-2'>
                                <Link href={"/login"} className={`font-semibold ${buttonVariants({ variant: "outline" })}`}>লগিন</Link>
                            </li>
                    }
                </div>
            </ul>
            <ModeToggle />
            {/* Mobile Navigation */}
            <div className="flex items-center justify-center sm:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent className='overflow-x-auto'>
                        <MobileNav categories={categories} />
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default NavBar