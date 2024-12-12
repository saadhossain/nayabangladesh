'use client'
import { useCategoryNews } from '@/app/hooks/useCategoryNews';
import { NewsType } from '@/types/newsTypes';
import NewsCard from '../NewsCard';
import NoNewsFound from '../NoNewsFound';
import LoadingSpinner from '../spinner/LoadingSpinner';

const PageContent = ({ category }: { category: string }) => {
  const { data, isLoading, isError } = useCategoryNews(category);
  return (
    <>
      {/* If Loading Display the Spinner */}
      {
        isLoading ? < LoadingSpinner /> : <>
          {/* If News Exists Display them otherwise show Error */}
          {
            data?.news?.length < 1 ? <NoNewsFound /> : <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              {
                data?.news?.map((news: NewsType) => <NewsCard key={news._id} news={news} />)
              }
            </div>
          }
        </>
      }
    </>
  )
}

export default PageContent