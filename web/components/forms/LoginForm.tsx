'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { FormEvent, Suspense, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpinner from '../spinner/LoadingSpinner';
import Processing from '../spinner/Processing';


const LoginForm = () => {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const redirectEndpoint = callbackUrl?.split('3000')[1];

    // State for processing status
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    // Handle login form submission
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email: string = form.email.value;
        const password: string = form.password.value;
        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });
            if (res?.ok) {
                toast.success('Login Successful.')
                setLoading(false);
            }

        } catch (error: any) {
            setLoading(false);
            throw new Error(error.message);
        }
    };
    // Use useEffect to handle redirection based on session and callbackUrl
    useEffect(() => {
        if (session) {
            if (redirectEndpoint) {
                redirect(`${redirectEndpoint}`);
            } else {
                if (session?.user.role === 'admin') {
                    redirect('/dashboard');
                } else {
                    redirect('/dashboard');
                }
            }
        }
    }, [session, redirectEndpoint]);

    return (
        <form onSubmit={handleLogin} className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">ইমেইল অ্যাড্রেস</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="w-full px-3 py-2 rounded-md bg-gray-300 text-gray-900 focus:outline-none" />
                </div>
                <div className='relative'>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">পাসওয়ার্ড</label>
                        <Link href="/login" className="text-md hover:text-primary">পাসওয়ার্ড ভুলে গেছেন?</Link>
                    </div>
                    <input type={`${showPassword ? 'password' : 'text'}`} name="password" id="password" placeholder="***********" className="w-full px-3 py-2 rounded-md bg-gray-300 text-gray-900 focus:outline-none" />
                    <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute top-11 right-2'>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full flex items-center justify-center px-8 py-3 font-semibold rounded-md bg-primary text-white">
                        {loading ? <Processing title={'লগিন হচ্ছে'} /> : 'লগিন করুন'}
                    </button>
                </div>
            </div>
        </form>
    );
};

const LoginPageWrapper = () => (
    <Suspense fallback={<LoadingSpinner />}>
        <LoginForm />
    </Suspense>
);

export default LoginPageWrapper;