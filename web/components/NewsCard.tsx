import fallbackImage from '@/public/images/fallbackImage.webp';
import { NewsType } from '@/types/newsTypes';
import parse from 'html-react-parser';
import Image from 'next/image';
import NewsDetailsLink from './ui/NewsDetailsBtn';

const NewsCard = ({ news }: { news: NewsType }) => {
    return (
        <div className='max-h-[420px] overflow-hidden bg-gray-50 pb-2'>
            <NewsDetailsLink news={news}>
                <Image
                    src={news.featuredImg ? news.featuredImg : fallbackImage}
                    alt={news.title} width={700} height={200}
                    className='rounded-t-md mb-3 h-[180px]'
                    loading='lazy'
                />
                <h2 className='text-base md:text-lg font-semibold px-4 mb-2'>{news.title}</h2>
            </NewsDetailsLink>
            <div className='px-4'>
                {
                    parse(news.story.slice(0, 250))
                }
            </div>
            {/* <NewsDetailsLink news={news}><Button>বিস্তারিত</Button></NewsDetailsLink> */}
        </div>
    )
}

export default NewsCard