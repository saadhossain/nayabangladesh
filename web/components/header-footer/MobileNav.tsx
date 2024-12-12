'use client'
import { CategoryType } from '@/types/newsTypes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '../ui/button'

const MobileNav = ({ categories }: { categories: CategoryType[] }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <div>
      <ul className="flex flex-col gap-4 text-base font-semibold">
        {
          categories?.map((category: CategoryType) => <li
            key={category._id}
            className={`${pathname === `/${category.slug}` ? 'text-secondary' : 'text-primary'} hover:text-secondary duration-300 ease-in-out`}
          >
            <Link href={`/${category.slug}`}>{category.name}</Link>
          </li>
          )
        }
        <li className={`buttons space-x-2 ${session?.user && 'hidden'}`}>
          <Link href={"/login"} className={`font-semibold ${buttonVariants({ variant: "outline" })}`}>লগিন</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav