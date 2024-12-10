import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const JulyRevolution = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='july-revolution' />
        </div>
    )
}

export default JulyRevolution

export const metadata: Metadata = {
    title: 'জুলাই বিপ্লবের খবর - জুলাই স্মৃতি | July Revolution News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};