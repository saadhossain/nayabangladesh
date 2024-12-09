import Heading from '@/components/headings/Heading';
import { ReactNode } from 'react';

const NewsDetailsLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <div className='container mx-auto my-3 flex gap-5'>
            <main className='flex-1'>
                {children}
            </main>
            <aside className='w-2/6 mt-10'>
                <div className='sticky top-20 bg-gray-300 min-h-860vh] rounded p-5'>
                    <Heading title='সামপ্রতিক খবর' />
                </div>
            </aside>
        </div>
    );
};

export default NewsDetailsLayout;