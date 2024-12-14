'use client'
import { FilePenLine } from 'lucide-react';

const EditBtn = ({ id, modalType }: { id: string | undefined, modalType: string }) => {
    // const dispatch = useAppDispatch();

    // let modalToOpen: any;

    // if (modalType === 'review') {
    //     modalToOpen = setOpenEditReviewModal
    // } else if (modalType === 'order') {
    //     modalToOpen = setOpenOrderEditModal
    // } else {
    //     modalToOpen = null
    // }

    return (
        <FilePenLine
            className='cursor-pointer text-green-600'
            aria-label='Edit Review'
            size={18}
        // onClick={() => {
        //     dispatch(modalToOpen())
        //     dispatch(setSingleDataId(id))
        // }}
        />
    )
}

export default EditBtn