import RegisterForm from '@/components/RegisterForm';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'রেজিস্টার - নয়া বাংলাদেশ',
    description: SiteConfig.description
}


const RegisterPage = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-5 md:my-10 flex justify-center'>
            <div className="w-full flex flex-col max-w-md p-4 md:p-6 rounded-r-md bg-gray-100 text-gray-900 shadow-2xl">
                <div className="mb-2 md:mb-8 text-center">
                    <h1 className="my-2 md:my-3 text-2xl md:text-4xl font-bold text-primary">রেজিস্টার</h1>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;