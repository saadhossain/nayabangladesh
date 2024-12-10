import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Opinion = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='opinion' />
        </div>
    )
}

export default Opinion

export const metadata: Metadata = {
    title: 'মতামত - সম্পাদকীয় - উপসম্পাদকীয় | Opinion - Editorial - Subeditorial | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};