import FeaturedNews from '@/components/home/FeaturedNews';
import NoNewsFound from '@/components/news/NoNewsFound';
import { getNews } from './utils/apis';

const Home = async () => {
  const news = await getNews();
  return (
    <div className='container mx-auto p-4'>
      {
        news?.length < 1 ? <NoNewsFound /> : <div>
          <FeaturedNews news={news} />
        </div>
      }
    </div>
  )
}

export default Home