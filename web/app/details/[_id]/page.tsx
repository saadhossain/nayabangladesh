import { getNewsById } from '@/app/utils/apis';
import NewsInfo from '@/components/ui/NewsInfo';
import SocialShareBtns from '@/components/ui/SocialShareBtns';
import { SiteConfig } from '@/config/site';
import fallbackImage from '@/public/images/fallbackImage.webp';
import parse from 'html-react-parser';
import Head from 'next/head';
import Image from 'next/image';

const NewsDetails = async ({ params }: { params: { _id: string } }) => {
    const news = await getNewsById(params._id);
    return (
        <div className='container mx-auto p-4 dark:text-white'>
            <Head>
                <title>{news.title}</title>
                <meta name="description" content={news.excerpt} />
                <meta property="og:title" content={news.title} />
                <meta property="og:description" content={news.excerpt} />
            </Head>
            <article>
                <h2 className='text-lg md:text-3xl font-semibold'>{news.title}</h2>
                <NewsInfo news={news} />
                <Image
                    src={news.featuredImg ? news.featuredImg : fallbackImage}
                    alt={news.title} width={700} height={467}
                    className='rounded-md my-4'
                />
                {/* Social Share Btns */}
                <SocialShareBtns />
                <div className='my-5'>
                    {parse(news.story)}
                </div>
            </article>
        </div>
    )
}

export default NewsDetails


export const generateMetadata = async ({ params }: { params: { _id: string } }) => {
    const news = await getNewsById(params._id);
    return {
        title: `${news.title} - নয়া বাংলাদেশ`,
        description: SiteConfig.description
    }
}