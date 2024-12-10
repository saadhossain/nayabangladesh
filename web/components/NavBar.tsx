"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import logo from '../public/images/nayabangladesh logo.png'
import MobileNav from './mobile-nav'
import { ModeToggle } from './theme-toggle'
import { buttonVariants } from './ui/button'



const NavBar = () => {
    const [progress, setProgress] = useState(0)
    const pathname = usePathname();
    const { data: session } = useSession();

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
            <ul className='hidden md:flex w-full justify-end items-center space-x-4 '>
                <li><Link href={"/latest"}>সর্বশেষ</Link></li>
                <li><Link href={"/politics"}>রাজনীতি</Link></li>
                <li><Link href={"/bangladesh"}>বাংলাদেশ</Link></li>
                <li><Link href={"/crime"}>অপরাধ</Link></li>
                <li><Link href={"/world"}>বিশ্ব</Link></li>
                <li><Link href={"/business"}>বানিজ্য</Link></li>
                <li><Link href={"/july-revolution"}>জুলাই বিপ্লব</Link></li>
                <li><Link href={"/opinion"}>মতামত</Link></li>
                <li><Link href={"/sports"}>খেলা</Link></li>
                <li><Link href={"/entertainment"}>বিনোদন</Link></li>
                <li><Link href={"/jobs"}>চাকরি</Link></li>
                <li><Link href={"/lifestyle"}>জীবনযাপন</Link></li>
                <div>
                    {
                        session ? <Link href={"/dashboard"}>
                            <Image src={session?.user?.image} alt='Dashboard' width={32} height={32} className='h-8 w-8 rounded-full' />
                        </Link>
                            :
                            <li className='buttons px-4 space-x-2'>
                                <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>লগিন</Link>
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
                        <MobileNav />
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default NavBar