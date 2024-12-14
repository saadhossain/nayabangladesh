'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import { NewsType } from '@/types/newsTypes'
import HomeNewsCard from './HomeNewsCard'
type Props = {
    politicsNews: NewsType[],
    entertainNews: NewsType[],
}

const FeaturePoliticsEntertainNews = ({ politicsNews, entertainNews }: Props) => {
    const isMobile = useIsMobile();
    const sliceCount = isMobile ? 4 : 3;
    return (
        <div>
            {/* Politics News */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 py-5 border-b-2 border-gray-300'>
                {politicsNews?.slice(0, sliceCount)?.map((news: NewsType, idx) => <HomeNewsCard
                    key={news._id}
                    news={news}
                    noBorder={idx === politicsNews.length - 1}
                />)}
            </div>
            {/* Entertainment News  and Politics News*/}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 py-5 border-b-2 border-gray-300'>
                {entertainNews?.slice(0, sliceCount)?.map((news: NewsType, idx) => <HomeNewsCard
                    key={news._id}
                    news={news}
                    noBorder={idx === politicsNews.length - 1}
                />)}
            </div>
        </div>
    )
}

export default FeaturePoliticsEntertainNews