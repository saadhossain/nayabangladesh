import NewsPageContent from '@/components/admin/content/NewsPageContent'
import { SiteConfig } from '@/config/site'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'সব খবর - নয়া বাংলাদেশ',
    description: SiteConfig.description
}


const AllNews = () => {
    return (
        <NewsPageContent />
    )
}

export default AllNews