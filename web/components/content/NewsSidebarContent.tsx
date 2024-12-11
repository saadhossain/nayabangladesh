'use client'
import { useCategoryNews } from '@/app/hooks/useCategoryNews';
import { NewsType } from '@/types/newsTypes';
import HorizontalNewsCard from '../HorizontalNewsCard';
import Loading from '../spinner/Loading';

const NewsSidebarContent = () => {
    const { data, isLoading, isError } = useCategoryNews('latest');
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