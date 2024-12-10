import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Entertainment = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='entertainment' />
        </div>
    )
}

export default Entertainment

export const metadata: Metadata = {
    title: 'বিনোদন জগতের খবর - বিনোদন খবর | Entertainment News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};