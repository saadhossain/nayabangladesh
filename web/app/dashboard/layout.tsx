'use client'
import { DashboardSidebar } from '@/components/admin/write/DashboardSidebar';
import LoadingSpinner from '@/components/spinner/LoadingSpinner';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession();
    console.log(session?.user)
    //If user is not authorized return error and redirect to home page.
    useEffect(() => {
        if (session && session?.user.role !== 'editor') {
            toast.error('You are not authorized to access this page.');
            redirect('/');
        }
    }, [session]);

    if (!session) {

        return <LoadingSpinner />
    }
    return (
        <div className='container mx-auto'>
            <SidebarProvider>
                <DashboardSidebar />
                <main className='my-3'>
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;