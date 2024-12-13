'use client'
import { updateNewsPartially } from '@/app/utils/apis'
import { NewsType } from '@/types/newsTypes'
import Link from 'next/link'
import { ReactNode } from 'react'

const NewsDetailsLink = ({ news, children }: { news: NewsType, children: ReactNode }) => {
    const handleReadingCount = async (id: string | undefined) => {
        const updatedReadingCount = news?.readingCount + 1;
        await updateNewsPartially(id, { readingCount: updatedReadingCount });
    }
    return (
        <Link
            onClick={() => handleReadingCount(news._id)}
            href={`/details/${news._id}`}
        >
            {children}
        </Link>
    )
}

export default NewsDetailsLink