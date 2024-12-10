import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Bangladesh = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='bangladesh' />
        </div>
    )
}

export default Bangladesh

export const metadata: Metadata = {
    title: 'বাংলাদেশের সকল খবর - দেশের খবর | Bangladesh News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};