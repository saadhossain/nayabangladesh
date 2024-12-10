import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const World = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='world' />
        </div>
    )
}

export default World

export const metadata: Metadata = {
    title: 'আজকের আন্তর্জাতিক খবর - বিশ্ব সংবাদ | World News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};