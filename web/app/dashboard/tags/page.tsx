import TagsPageContent from '@/components/admin/content/TagsPageContent'
import { SiteConfig } from '@/config/site'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'ট্যাগসমূহ - নয়া বাংলাদেশ',
    description: SiteConfig.description
}


const Tags = () => {
    return (
        <TagsPageContent />
    )
}

export default Tags