'use client'
import { DashboardSidebar } from '@/components/admin/write/DashboardSidebar';
import LoadingSpinner from '@/components/spinner/LoadingSpinner';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession();
    //If user is not authorized return error and redirect to account page.
    if (!session) {
        redirect('/');
    }

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