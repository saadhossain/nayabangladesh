import { BASE_URL, SiteConfig } from '@/config/site';
import fallbackImage from '@/public/images/fallbackImage.webp';
import parse from 'html-react-parser';
import Head from 'next/head';
import Image from 'next/image';

const getSingleNews = async (id: string) => {
    const res = await fetch(`${BASE_URL}/news/${id}`);
    const data = await res.json();
    return data;
}

const NewsDetails = async ({ params }: { params: { _id: string } }) => {
    const news = await getSingleNews(params._id);
    return (
        <div className='container mx-auto p-4'>
            <Head>
                <title>{news.title}</title>
                <meta name="description" content={news.excerpt} />
                <meta property="og:title" content={news.title} />
                <meta property="og:description" content={news.excerpt} />
            </Head>
            <article>
                <h2 className='text-lg md:text-3xl font-semibold'>{news.title}</h2>
                <Image
                    src={news.featuredImg ? news.featuredImg : fallbackImage}
                    alt={news.title} width={700} height={467}
                    className='rounded-md my-4'
                />
                <div className='my-5'>
                    {parse(news.story)}
                </div>
            </article>
        </div>
    )
}

export default NewsDetails


export const generateMetadata = async ({ params }: { params: { _id: string } }) => {
    const news = await getSingleNews(params._id);
    return {
        title: `${news.title} - নয়া বাংলাদেশ`,
        description: SiteConfig.description
    }
}