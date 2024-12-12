'use client'
import { useCategoryNews } from '@/app/hooks/useCategoryNews';
import { getNewsById } from '@/app/utils/apis';
import { NewsType } from '@/types/newsTypes';
import { useQuery } from '@tanstack/react-query';
import HorizontalNewsCard from '../HorizontalNewsCard';
import Loading from '../spinner/Loading';

const NewsSidebarContent = ({ newsId }: { newsId: string }) => {
    const { data: openedNews } = useQuery({
        queryKey: ['newsCategory'],
        queryFn: () => getNewsById(newsId)
    })
    const { data, isLoading, isError } = useCategoryNews(openedNews?.category?.slug);
    return (
        <div>
            {
                data?.news?.length < 1 ? <Loading />
                    : <div>
                        {data?.news?.map((news: NewsType) => <HorizontalNewsCard key={news._id} news={news} />)}
                    </div>

            }
        </div>
    )
}

export default NewsSidebarContent