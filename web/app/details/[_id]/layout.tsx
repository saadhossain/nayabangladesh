import NewsSidebarContent from '@/components/content/NewsSidebarContent';
import Heading from '@/components/headings/Heading';
import { ReactNode } from 'react';

const NewsDetailsLayout = async ({ children, params }: { children: ReactNode, params: { _id: string } }) => {
    const newsId = params._id;
    return (
        <div className='w-full md:container mx-auto my-3 md:flex gap-5'>
            <main className='w-full md:flex-1'>
                {children}
            </main>
            <aside className='w-full md:w-2/6 mt-10'>
                <div className='sticky top-20 bg-gray-100 dark:bg-gray-800 min-h-860vh] rounded p-5'>
                    <Heading title='সামপ্রতিক খবর' />
                    <NewsSidebarContent newsId={newsId} />
                </div>
            </aside>
        </div>
    );
};

export default NewsDetailsLayout;