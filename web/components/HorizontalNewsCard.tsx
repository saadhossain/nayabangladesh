import fallbackImage from '@/public/images/fallbackImage.webp';
import { NewsType } from '@/types/newsTypes';
import Image from 'next/image';
import NewsDetailsLink from './ui/NewsDetailsBtn';

const HorizontalNewsCard = ({ news }: { news: NewsType }) => {
    return (
        <NewsDetailsLink news={news}>
            <div className='flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-900 py-2 pl-2 rounded mb-2'>
                <Image
                    src={news.featuredImg ? news.featuredImg : fallbackImage}
                    alt={news.title} width={300} height={100}
                    className='rounded-md mb-3 h-[100px]'
                    loading='lazy'
                />
                <h2 className='text-sm md:text-base font-semibold px-4 mb-2'>{news.title}</h2>
            </div>
        </NewsDetailsLink>
    )
}

export default HorizontalNewsCard