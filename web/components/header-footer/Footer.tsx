import { SiteConfig } from '@/config/site'
import nayabangladesh from '@/public/images/nayabangladesh logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, FacebookMessengerIcon, LinkedinIcon, TelegramIcon, WhatsappIcon, XIcon } from 'react-share'

const Footer = () => {
    return (
        <footer className='container mx-auto py-10 bg-gray-100 dark:bg-gray-800'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div>
                    <Image src={nayabangladesh} alt='NayaBangladesh' width={280} height={80} />
                    <p>{SiteConfig.description}</p>
                </div>
                <div>
                    <p className='text-xl font-semibold border-l-4 border-primary mb-3 pl-2'>সম্পাদক</p>
                    <p>
                        প্রধান সম্পাদক নয়া বাংলাদেশ,<br />
                        ঢাকা - ১২১৬, থেকে প্রকাশিত।
                    </p>
                </div>
                <div>
                    <p className='text-xl font-semibold border-l-4 border-primary mb-3 pl-2'>যুক্ত হোনঃ</p>
                    <div className='flex items-center gap-2'>
                        <FacebookIcon size={32} round={true} />
                        <FacebookMessengerIcon size={32} round={true} />
                        <XIcon size={32} round={true} />
                        <WhatsappIcon size={32} round={true} />
                        <LinkedinIcon size={32} round={true} />
                        <TelegramIcon size={32} round={true} />
                    </div>
                    <ul className='mt-5 flex items-center gap-5'>
                        <li>
                            <Link href='/'>গোপনীয়তার নীতি</Link>
                        </li>
                        <li>
                            <Link href='/'>ব্যবহারের নীতিমালা</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-center border-t border-gray-300 pt-5 mt-5 md:mt-0'>&copy; 2025 | নয়া বাংলাদেশ কর্তৃক সর্বসত্ত্ব সংরক্ষিত। </p>
        </footer>
    )
}

export default Footer