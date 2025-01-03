import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Latest = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='latest' />
        </div>
    )
}

export default Latest

export const metadata: Metadata = {
    title: 'সর্বশেষ খবর - আজকের খবর - ব্রেকিং নিউজ | Latest News - Breaking News - Todays News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};