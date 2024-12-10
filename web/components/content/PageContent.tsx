'use client'
import { useCategoryNews } from '@/app/hooks/useCategoryNews';
import { NewsType } from '@/types/newsTypes';
import NewsCard from '../NewsCard';

const PageContent = ({ category }: { category: string }) => {
  const { data, isLoading, isError } = useCategoryNews(category);
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
      {
        data?.map((news: NewsType) => <NewsCard key={news._id} news={news} />)
      }
    </div>
  )
}

export default PageContent