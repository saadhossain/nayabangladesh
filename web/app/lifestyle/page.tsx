import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const LifeStyle = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='lifestyle' />
        </div>
    )
}

export default LifeStyle

export const metadata: Metadata = {
    title: 'লাইফস্টাইন - জীবনযাপনের খবর | LifeStyle News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};