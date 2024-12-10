import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Crime = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='crime' />
        </div>
    )
}

export default Crime

export const metadata: Metadata = {
    title: 'অপরাধ জগতের সকল খবর | Crime News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};