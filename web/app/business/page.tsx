import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Business = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='business' />
        </div>
    )
}

export default Business

export const metadata: Metadata = {
    title: 'ব্যবসা-বানিজ্যের খবর - অর্থনীতির খবর | Business and Economy News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};