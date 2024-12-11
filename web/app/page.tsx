import NewsCard from '@/components/NewsCard';
import NoNewsFound from '@/components/NoNewsFound';
import { NewsType } from '@/types/newsTypes';
import { getNews } from './utils/apis';

const Bangladesh = async () => {
  const news = await getNews();
  return (
    <div className='container mx-auto p-4'>
      {
        news?.length < 1 ? <NoNewsFound /> : <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          {
            news?.map((news: NewsType) => <NewsCard key={news._id} news={news} />)
          }
        </div>
      }
    </div>
  )
}

export default Bangladesh