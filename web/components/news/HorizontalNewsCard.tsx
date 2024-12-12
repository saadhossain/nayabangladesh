import fallbackImage from '@/public/images/fallbackImage.webp';
import { NewsType } from '@/types/newsTypes';
import Image from 'next/image';
import NewsDetailsLink from './NewsDetailsBtn';

const HorizontalNewsCard = ({ news }: { news: NewsType }) => {
    return (
        <NewsDetailsLink news={news}>
            <div className='flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-900 py-2 pl-3 rounded mb-4'>
                <Image
                    src={news.featuredImg ? news.featuredImg : fallbackImage}
                    alt={news.title} width={192} height={100}
                    className='rounded-md md:max-w-48 w-full h-[100px]'
                    loading='lazy'
                />
                <h2 className='text-sm md:text-base font-semibold px-4 hover:text-primary duration-300 ease-in-out'>{news.title}</h2>
            </div>
        </NewsDetailsLink>
    )
}

export default HorizontalNewsCard