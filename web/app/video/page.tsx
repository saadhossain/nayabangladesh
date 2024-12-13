import PageContent from '@/components/content/PageContent';
import { SiteConfig } from '@/config/site';
import { Metadata } from 'next';

const Video = () => {
    return (
        <div className='container mx-auto p-4'>
            <PageContent category='video' />
        </div>
    )
}

export default Video

export const metadata: Metadata = {
    title: 'ভিডিও খবর - ভিডিও নিউজ | Video News | নয়া বাংলাদেশ',
    description: SiteConfig.description,
};