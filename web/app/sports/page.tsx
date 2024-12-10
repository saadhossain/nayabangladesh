import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Sports = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='sports' />
        </div>
    )
}

export default Sports

export const metadata: Metadata = {
    title: 'খেলার খবর - খেলাধুলা | Sports News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};