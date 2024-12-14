"use client"
import { getCategory } from '@/app/utils/apis'
import {
    Sheet,
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
import logo from '../../public/images/nayabangladesh logo.png'
import { ModeToggle } from '../theme-toggle'
import { buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'



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
        <nav className='container mx-auto h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center gap-5 justify-between z-10'>
            <LoadingBar
                color='#6028ff'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <Link href={"/"}>
                <Image src={logo} alt='Naya Bangladesh' className='w-56 h-auto' />
            </Link>
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
            </ul>
            <div className='flex items-center gap-2'>
                <ModeToggle />
                {/* Login Button and User Image  */}
                {
                    session ? <Link href={"/dashboard"} className='w-8'>
                        <Image src={session?.user?.image} alt='Dashboard' width={32} height={32} className='h-8 w-8 rounded-full' />
                    </Link>
                        :
                        <Link href={"/login"} className={`font-semibold ${buttonVariants({ variant: "outline" })}`}>লগিন</Link>
                }
                {/* Mobile Navigation */}
                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <MobileNav categories={categories} />
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default NavBar