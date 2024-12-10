import LoginForm from '@/components/LoginForm';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa";

export const metadata: Metadata = {
    title: 'লগিন - নয়া বাংলাদেশ',
    description: SiteConfig.description
}

const LoginPage = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-5 md:my-10 flex justify-center'>
            <div className="w-full flex flex-col max-w-md p-4 md:p-6 rounded-r-md bg-gray-100 text-gray-900 shadow-2xl">
                <div className="mb-2 md:mb-8 text-center">
                    <h1 className="my-2 md:my-3 text-2xl md:text-4xl font-bold text-primary">একাউন্ট লগিন</h1>
                </div>
                <LoginForm />
                <div className='w-full my-3'>
                    <button className='w-full flex gap-2 items-center justify-center bg-gray-400 text-white py-3 rounded-md font-semibold' disabled>
                        <FaGoogle className='w-6 h-6' />গুগল লগিন
                    </button>
                </div>
                <p className="px-6 text-sm text-center text-gray-400">আপনি কি নতুন?
                    <Link href="/register" className="text-primary hover:text-secondary ml-2 text-lg font-semibold">রেজিস্টার করুন</Link>.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;