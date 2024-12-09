import { AppSidebar } from '@/components/app-sidebar';
import LoadingSpinner from '@/components/spinner/LoadingSpinner';
import { SidebarProvider } from '@/components/ui/sidebar';
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
        <div className='container mx-auto'>
            <SidebarProvider>
                <AppSidebar />
                <main className='my-3'>
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;