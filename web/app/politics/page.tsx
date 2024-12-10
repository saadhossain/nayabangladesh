import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Politics = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='politics' />
        </div>
    )
}

export default Politics

export const metadata: Metadata = {
    title: 'রাজনীতির খবর - রাজনীতির সর্বশেষ খবর | Politics News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};