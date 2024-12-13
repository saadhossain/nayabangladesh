import { convertTimeToBengali } from '@/app/utils/convertTimeToBengali'
import { NewsType } from '@/types/newsTypes'
import parse from 'html-react-parser'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import NewsDetailsLink from '../news/NewsDetailsBtn'
import FeatureHorizontalCard from './FeatureHorizontalCard'
import HomeNewsCard from './HomeNewsCard'

type Props = {
    top3NewsFromBangladesh: NewsType[],
    entertainmentNews: NewsType[],
    politicsNews: NewsType[]
}

const FeatureNewsMiddle = ({ top3NewsFromBangladesh, entertainmentNews, politicsNews }: Props) => {
    const { timeAgo } = convertTimeToBengali(top3NewsFromBangladesh[0].createdAt)
    return (
        <div className='w-2/4 border-x-2 border-gray-300 px-2 py-5'>
            {/* Feature Top News */}
            <NewsDetailsLink news={top3NewsFromBangladesh[0]}>
                <div className='flex justify-between gap-4 py-5 border-b border-gray-300'>
                    <Image src={top3NewsFromBangladesh[0].featuredImg} alt={top3NewsFromBangladesh[0].title} width={400} height={300} className='rounded' />
                    <div>
                        <h4 className='font-semibold text-gray-800 hover:text-primary duration-300 ease-in-out'>{top3NewsFromBangladesh[0].title}</h4>
                        <p className='mt-2'>{
                            top3NewsFromBangladesh[0].excerpt ? top3NewsFromBangladesh[0].excerpt.slice(0, 220) : parse(top3NewsFromBangladesh[0].story.slice(0, 220))
                        }</p>
                        <p className='flex items-center gap-1 mt-2'><Clock size={16} />{timeAgo}</p>
                    </div>
                </div>
            </NewsDetailsLink>
            {/* Middle Section of Feature News */}
            <div className='grid grid-cols-2 gap-5 border-b border-gray-300'>
                {top3NewsFromBangladesh?.slice(1, 3)?.map((n: NewsType) => <FeatureHorizontalCard
                    key={n._id}
                    news={n}
                    isOnlyTitle={false}
                />)}
            </div>

            {/* Entertainment News */}
            <div className='grid grid-cols-3 gap-4 py-5 border-b-2 border-gray-300'>
                {entertainmentNews.map((news: NewsType, idx) => <HomeNewsCard
                    key={news._id}
                    news={news}
                    noBorder={idx === politicsNews.length - 1}
                />)}
            </div>
            {/* Politics News */}
            <div className='grid grid-cols-3 gap-4 py-5 border-b-2 border-gray-300'>
                {politicsNews.map((news: NewsType, idx) => <HomeNewsCard
                    key={news._id}
                    news={news}
                    noBorder={idx === politicsNews.length - 1}
                />)}
            </div>
        </div>
    )
}

export default FeatureNewsMiddle