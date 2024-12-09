import { NewsType } from '@/types/newsTypes';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
const NewsCard = ({ news }: { news: NewsType }) => {
    return (
        <div>
            <Link href={`details/${news._id}`}>
                <Image src={news.featuredImg} alt={news.title} width={700} height={467} className='rounded-md mb-3' />
                <h2 className='text-base md:text-lg font-semibold'>{news.title}</h2>
            </Link>
            <div className='my-5'>
                {
                    parse(news.story.slice(0, 350))
                }
            </div>
            <Link href={`${news.category.slug}/${news._id}`}><Button>বিস্তারিত</Button></Link>
        </div>
    )
}

export default NewsCard