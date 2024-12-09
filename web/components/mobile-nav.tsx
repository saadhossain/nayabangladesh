'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const MobileNav = () => {
  const { data: session } = useSession();
  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li><Link href={"/news"}>সর্বশেষ</Link></li>
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
        <li className={`buttons space-x-2 ${session?.user && 'hidden'}`}>
          <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>লগিন</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav