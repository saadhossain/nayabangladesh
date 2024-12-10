import NewsCard from '@/components/NewsCard';
import { NewsType } from '@/types/newsTypes';
import { getNews } from '../utils/apis';

const Latest = async () => {
    const allNews = await getNews();
    return (
        <div className='container mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-5'>
            {
                allNews?.map((news: NewsType) => <NewsCard key={news._id} news={news} />)
            }
        </div>
    )
}

export default Latest