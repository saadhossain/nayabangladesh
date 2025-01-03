import { getNewsById } from '@/app/utils/apis';
import NewsDetailsContent from '@/components/content/NewsDetailsContent';
import NewsComment from '@/components/news/NewsComment';
import NewsSidebar from '@/components/news/NewsSidebar';
import { SiteConfig } from '@/config/site';

const NewsDetails = async ({ params }: { params: { _id: string } }) => {
    const news = await getNewsById(params._id);
    return (
        <div className='w-full md:container mx-auto my-3 md:flex gap-5'>
            <main className='w-full md:w-4/6 mb-5'>
                <NewsDetailsContent news={news} />
                <NewsComment newsId={news?._id} />
            </main>
            <aside className='w-full md:w-2/6 mt-10'>
                <NewsSidebar
                    newsCategory={news?.category}
                    newsId={news?._id}
                />
            </aside>
        </div>
    );
};

export default NewsDetails;


export const generateMetadata = async ({ params }: { params: { _id: string } }) => {
    const news = await getNewsById(params._id);
    return {
        title: `${news.title} - নয়া বাংলাদেশ`,
        description: SiteConfig.description
    }
}