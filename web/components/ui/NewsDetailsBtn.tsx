'use client'
import { updateNewsPartially } from '@/app/utils/apis'
import { NewsType } from '@/types/newsTypes'
import Link from 'next/link'
import { ReactNode } from 'react'

const NewsDetailsLink = ({ news, children }: { news: NewsType, children: ReactNode }) => {
    const handleReadingCount = async (id: string | undefined) => {
        await updateNewsPartially(id);
    }
    return (
        <Link
            onClick={() => handleReadingCount(news._id)}
            href={`details/${news._id}`}
        >
            {children}
        </Link>
    )
}

export default NewsDetailsLink