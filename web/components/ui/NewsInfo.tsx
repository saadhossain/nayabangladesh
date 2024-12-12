'use client'
import { convertTimeToBengali } from '@/app/utils/convertTimeToBengali';
import logo from '@/public/images/nayabangladesh-icon.png';
import { NewsType } from '@/types/newsTypes';
import Image from 'next/image';
import { useState } from 'react';

const NewsInfo = ({ news }: { news: NewsType }) => {
    const [imageError, setImageError] = useState<boolean>(false);
    const { timeAgo, formattedDate } = convertTimeToBengali(news.createdAt);
    return (
        <div className='my-3 md:my-4'>
            <div className='flex items-center gap-2'>
                <Image src={imageError ? logo : news.reporter.image} alt={news.reporter.name} width={48} height={48}
                    onError={() => setImageError(true)}
                    className='h-12 rounded-lg' />
                <div>
                    <h5 className='text-base font-semibold'>{news.reporter.name}</h5>
                    {/* <p>{newsPostedTime}</p> */}
                </div>
            </div>
        </div>
    )
}

export default NewsInfo