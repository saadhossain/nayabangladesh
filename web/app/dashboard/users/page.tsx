import UsersPageContent from '@/components/admin/content/UsersPageContent'
import { SiteConfig } from '@/config/site'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'ব্যবহারকারী - নয়া বাংলাদেশ',
    description: SiteConfig.description
}


const Users = () => {
    return (
        <UsersPageContent />
    )
}

export default Users