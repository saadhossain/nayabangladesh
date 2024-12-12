import { convertTimeToBengali } from '@/app/utils/convertTimeToBengali';
import fallbackImage from '@/public/images/fallbackImage.webp';
import { NewsType } from '@/types/newsTypes';
import parse from 'html-react-parser';
import Image from 'next/image';
import NewsDetailsLink from './ui/NewsDetailsBtn';

const NewsCard = ({ news }: { news: NewsType }) => {
    const { dateAndDay, timeAgo, dateOnly } = convertTimeToBengali(news.createdAt);
    return (
        <div className='max-h-[440px] overflow-hidden bg-gray-50 pb-2'>
            <NewsDetailsLink news={news}>
                <Image
                    src={news.featuredImg ? news.featuredImg : fallbackImage}
                    alt={news.title} width={700} height={200}
                    className='rounded-t-md mb-3 h-[160px] md:h-[200px]'
                    loading='lazy'
                />
                {/* News Published Day */}
                <p className='flex items-center gap-2 mb-2 px-2 border-b border-gray-300 pb-2'>
                    <span className='block md:hidden'>{dateAndDay}</span>
                    <span className='hidden md:block'>{`${dateOnly}, (${timeAgo})`}</span>
                </p>
                <h2 className='text-sm md:text-lg font-semibold mb-2 p-4 md:py-0'>{news.title}</h2>
            </NewsDetailsLink>
            <div className='px-4 hidden md:block'>
                {
                    news.excerpt ? news.excerpt : parse(news.story.slice(0, 160))
                }
            </div>
        </div>
    )
}

export default NewsCard