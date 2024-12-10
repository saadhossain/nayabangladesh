import { NewsType } from '@/types/newsTypes';
import parse from 'html-react-parser';
import Image from 'next/image';
import { Button } from './ui/button';
import NewsDetailsLink from './ui/NewsDetailsBtn';
const NewsCard = ({ news }: { news: NewsType }) => {

    return (
        <div>
            <NewsDetailsLink news={news}>
                <Image src={news.featuredImg} alt={news.title} width={700} height={400} className='rounded-md mb-3 max-h-[400px]' />
                <h2 className='text-base md:text-lg font-semibold'>{news.title}</h2>
            </NewsDetailsLink>
            <div className='my-5'>
                {
                    parse(news.story.slice(0, 350))
                }
            </div>
            <NewsDetailsLink news={news}><Button>বিস্তারিত</Button></NewsDetailsLink>
        </div>
    )
}

export default NewsCard