'use client'
import NewsCard from '@/components/NewsCard';
import Loading from '@/components/spinner/Loading';
import { NewsType } from '@/types/newsTypes';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '../utils/apis';

const CatBangladesh = () => {
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

export default CatBangladesh