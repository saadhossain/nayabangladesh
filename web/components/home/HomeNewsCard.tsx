import { convertTimeToBengali } from '@/app/utils/convertTimeToBengali';
import { NewsType } from '@/types/newsTypes';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import NewsDetailsLink from '../news/NewsDetailsBtn';

const HomeNewsCard = ({ news, noBorder }: { news: NewsType, noBorder: boolean }) => {
    const { timeAgo } = convertTimeToBengali(news.createdAt)
    return (
        <NewsDetailsLink news={news}>
            <div className={`${noBorder ? '' : 'border-r pr-3'} border-gray-300 flex flex-col gap-2`}>
                <Image src={news.featuredImg} alt={news.title} width={180} height={80} className='rounded' />
                <h4 className='font-semibold text-gray-800 hover:text-primary duration-300 ease-in-out'>{news.title}</h4>
                {/* <p>{
                    news.excerpt ? news.excerpt.slice(0, 90) : parse(news.story.slice(0, 90))
                }</p> */}
                <p className='flex items-center gap-1'><Clock size={16} />{timeAgo}</p>
            </div>
        </NewsDetailsLink>
    )
}

export default HomeNewsCard