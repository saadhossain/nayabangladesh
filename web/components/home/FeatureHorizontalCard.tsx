import { convertTimeToBengali } from '@/app/utils/convertTimeToBengali';
import { NewsType } from '@/types/newsTypes';
import parse from 'html-react-parser';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import NewsDetailsLink from '../news/NewsDetailsBtn';

const FeatureHorizontalCard = ({ news, isOnlyTitle }: { news: NewsType, isOnlyTitle: boolean }) => {
    const { timeAgo } = convertTimeToBengali(news?.createdAt)
    return (
        <div className='py-4 border-b border-gray-300'>
            <NewsDetailsLink news={news}>
                <div className='flex justify-between gap-2'>
                    <h4 className={`${isOnlyTitle ? 'font-normal' : 'font-semibold'} text-gray-800 hover:text-primary duration-300 ease-in-out`}>{news.title}</h4>
                    <Image src={news.featuredImg} alt={news.title} width={100} height={60} className={`rounded ${isOnlyTitle && 'hidden'} max-h-16`} />
                </div>
                <p className={`mt-2 ${isOnlyTitle && 'hidden'}`}>{
                    news.excerpt ? news.excerpt.slice(0, 90) : parse(news.story.slice(0, 90))
                }</p>
            </NewsDetailsLink>
            <p className={`${isOnlyTitle && 'hidden'} flex items-center gap-1 mt-2`}><Clock size={16} />{timeAgo}</p>
        </div>
    )
}

export default FeatureHorizontalCard