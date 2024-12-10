import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Jobs = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='jobs' />
        </div>
    )
}

export default Jobs

export const metadata: Metadata = {
    title: 'চাকরীর খবর - চাকরীর বিজ্ঞপ্তি | Jobs News - Job Circular | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};