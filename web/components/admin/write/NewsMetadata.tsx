import { getCategory, getTag, getUsers } from '@/app/utils/apis';
import Loading from '@/components/spinner/Loading';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import AddCategoryForm from './AddCategoryForm';
import AddReporterForm from './AddReporterForm';
import AddTagForm from './AddTagForm';
import { MultiCheckbox } from './MultiCheckbox';
import SelectMetadata from './SelectMetadata';
import UploadImg from './UploadImg';

type Props = {
    setSelectedCat: Dispatch<SetStateAction<{}>>,
    setSelectedUser: Dispatch<SetStateAction<{}>>,
    setSelectedTag: Dispatch<SetStateAction<string[]>>,
    setFeaturedImg: Dispatch<SetStateAction<string>>,
    handleSubmit: () => Promise<void>,
    newsAddingPending: boolean
}

const NewsMetadata = ({ setSelectedCat, setSelectedUser, setSelectedTag, setFeaturedImg, handleSubmit, newsAddingPending }: Props) => {
    //Get categories from the Server
    const { data: categories, isPending: categoryPending } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategory
    })
    //Get Tags from the Server
    const { data: tags, isPending: tagPending } = useQuery({
        queryKey: ['tags'],
        queryFn: getTag
    })
    //Get Users from the Server
    const { data: users, isPending: userPending } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })
    return (
        <div className='w-1/4'>
            {/* Submit button */}
            <Button
                onClick={handleSubmit}
                className='block ml-auto mb-3 text-white font-semibold'
                disabled={newsAddingPending}
            >পাবলিশ করুন</Button>
            {/* Featured Image */}
            <div className='border border-gray-300 rounded p-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-5 pb-2'>ফিচারড ছবি</h5>
                <UploadImg setFeaturedImg={setFeaturedImg} />
            </div>

            {/* Post Category */}
            <div className='border border-gray-300 rounded p-5 mt-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-2 pb-2'>ক্যাটেগরি</h5>
                {
                    categoryPending ? <Loading /> : <><SelectMetadata data={categories} stateToSaveData={setSelectedCat} />
                        <AddCategoryForm /></>
                }
            </div>

            {/* Post Tags */}
            <div className='border border-gray-300 rounded p-5 mt-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-2 pb-2'>ট্যাগস</h5>
                {
                    tagPending ? <Loading /> : <><MultiCheckbox data={tags} stateToSaveData={setSelectedTag} />
                        <AddTagForm /></>
                }
            </div>
            {/* Post Author */}
            <div className='border border-gray-300 rounded p-5 mt-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-2 pb-2'>রিপোর্টার</h5>
                {
                    userPending ? <Loading /> : <><SelectMetadata data={users} stateToSaveData={setSelectedUser} />
                        <AddReporterForm /></>
                }
            </div>
            {/* Submit button */}
            <Button
                onClick={handleSubmit}
                className='w-full block ml-auto mt-3 text-white font-semibold'
                disabled={newsAddingPending}
            >পাবলিশ করুন</Button>
        </div>
    )
}

export default NewsMetadata