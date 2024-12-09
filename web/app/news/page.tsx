'use client'
import NewsCard from '@/components/NewsCard';
import Loading from '@/components/spinner/Loading';
import { NewsType } from '@/types/newsTypes';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '../utils/apis';

const Latest = () => {
  const { data: allNews, isLoading } = useQuery({
    queryKey: ['getNews'],
    queryFn: getNews
  })
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        allNews?.map((news: NewsType) => <NewsCard key={news._id} news={news} />)
      }
    </div>
  )
}

// export const metadata: Metadata = {
//   title: 'নিউজ - নয়া বাংলাদেশ',
//   description: 'A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.',
// }


export default Latest;
