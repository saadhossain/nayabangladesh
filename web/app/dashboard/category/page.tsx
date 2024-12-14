import CategoryPageContent from '@/components/admin/content/CategoryPageContent'
import { SiteConfig } from '@/config/site'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'ক্যাটেগরি - নয়া বাংলাদেশ',
    description: SiteConfig.description
}


const Category = () => {
    return (
        <CategoryPageContent />
    )
}

export default Category