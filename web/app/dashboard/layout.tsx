import LoadingSpinner from '@/components/spinner/LoadingSpinner';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession(authOptions)
    //If user is not authorized return error and redirect to account page.
    if (!session) {
        redirect('/');
    }

    if (!session) {

        return <LoadingSpinner />
    }
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-3 md:my-10'>
            {
                (session && session?.user?.role === 'admin') &&
                <div className='flex gap-10'>
                    <div className='w-1/5 hidden md:block'>
                        {/* <Heading heading={'Dashboard'} /> */}
                        <h3>Dashboard Menus</h3>
                    </div>
                    <main className='w-full md:w-9/12'>
                        {children}
                    </main>
                </div>
            }
        </div>

    );
};

export default DashboardLayout;