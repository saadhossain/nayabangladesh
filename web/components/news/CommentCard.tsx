import { convertTimeToBengali } from '@/app/utils/convertTimeToBengali';
import { CommentType } from '@/types/newsTypes';
import Image from 'next/image';

const CommentCard = ({ comment }: { comment: CommentType }) => {
    const { formattedDate } = convertTimeToBengali(comment?.createdAt);
    return (
        <div className='border border-gray-300 rounded-md p-6 my-5'>
            <p>{comment.comment}</p>
            <div className='flex items-center gap-5 mt-5'>
                <Image src={comment?.image} alt={comment.readerName} width={50} height={50} className='rounded-full border-2 border-gray-500' />
                <div>
                    <p>{comment.readerName}</p>
                    <p>{formattedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard