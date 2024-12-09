import { getCategory, getTag } from '@/app/utils/apis';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import AddCategoryForm from './AddCategoryForm';
import AddTagForm from './AddTagForm';
import { MultiCheckbox } from './MultiCheckbox';
import UploadImg from './UploadImg';

type Props = {
    setSelectedCat: Dispatch<SetStateAction<string[]>>,
    setSelectedTag: Dispatch<SetStateAction<string[]>>,
    setFeaturedImg: Dispatch<SetStateAction<string>>
}

const NewsMetadata = ({ setSelectedCat, setSelectedTag, setFeaturedImg }: Props) => {
    //Get categories from the Server
    const { data: categories } = useQuery({
        queryKey: ['getCategories'],
        queryFn: getCategory
    })
    //Get Tags from the Server
    const { data: tags } = useQuery({
        queryKey: ['getTags'],
        queryFn: getTag
    })

    return (
        <div className='w-1/4'>
            {/* Featured Image */}
            <div className='border border-gray-300 rounded p-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-5 pb-2'>Featured Image</h5>
                <UploadImg setFeaturedImg={setFeaturedImg} />
            </div>

            {/* Post Category */}
            <div className='border border-gray-300 rounded p-5 mt-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-5 pb-2'>Category</h5>
                <AddCategoryForm />
                <MultiCheckbox data={categories} stateToSaveData={setSelectedCat} />
            </div>

            {/* Post Tags */}
            <div className='border border-gray-300 rounded p-5 mt-5'>
                <h5 className='text-base font-semibold border-b border-gray-300 mb-5 pb-2'>Tags</h5>
                <AddTagForm />
                <MultiCheckbox data={tags} stateToSaveData={setSelectedTag} />
            </div>
        </div>
    )
}

export default NewsMetadata