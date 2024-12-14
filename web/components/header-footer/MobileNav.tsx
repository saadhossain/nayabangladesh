'use client'
import logo from '@/public/images/nayabangladesh logo.png'
import { CategoryType } from '@/types/newsTypes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SheetClose, SheetContent } from '../ui/sheet'

const MobileNav = ({ categories }: { categories: CategoryType[] }) => {
  const pathname = usePathname();
  return (
    <SheetContent className='overflow-x-auto text-base font-semibold'>
      <Image src={logo} alt='Naya Bangladesh' height={60} width={210} />
      <div className='flex flex-col gap-5'>
        {
          categories?.map((category: CategoryType) => <SheetClose
            asChild
            key={category._id}
            className={`${pathname === `/${category.slug}` ? 'text-secondary' : 'text-primary'} hover:text-secondary duration-300 ease-in-out`}
          >
            <Link href={`/${category.slug}`}>{category.name}</Link>
          </SheetClose>
          )
        }
      </div>
    </SheetContent>
  )
}

export default MobileNav