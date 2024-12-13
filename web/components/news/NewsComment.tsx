'use client';

import { getCommentsByNewsId } from '@/app/utils/apis';
import { CommentType } from '@/types/newsTypes';
import { useQuery } from '@tanstack/react-query';
import { MessageSquareMore } from 'lucide-react';
import { useRef, useState } from 'react';
import NewsCommentForm from '../forms/NewsCommentForm';
import CommentCardLoader from '../spinner/CommentCardLoader';
import CommentCard from './CommentCard';

const NewsComment = ({ newsId }: { newsId: string }) => {
    const [expandCommentBox, setExpandCommentBox] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    //Get Comments
    const { data: comments, isLoading } = useQuery({
        queryKey: ['getComments'],
        queryFn: () => getCommentsByNewsId(newsId)
    })

    const toggleCommentBox = () => {
        setExpandCommentBox((prev) => !prev);
        // Scroll to the form after state update
        if (!expandCommentBox) {
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
        }
    };

    return (
        <section className='mt-6 border-t border-gray-300'>
            {/* News Comment Section */}
            <>
                <div className='w-11/12 flex flex-col items-center justify-center py-6'>
                    <h4 className='text-lg font-semibold'>পাঠকের মতামত</h4>
                    <p>-মন্তব্য সমূহ পাঠকের একান্ত ব্যক্তিগত। এর জন্য সম্পাদক দায়ী নন।</p>
                </div>
                {/* Comment Form Toggle Button */}
                <button
                    onClick={toggleCommentBox}
                    className='flex items-center gap-2 ml-auto mr-10'
                >
                    <p className='text-lg font-semibold hover:text-primary duration-300 ease-in-out'>মন্তব্য করুন</p>
                    <MessageSquareMore size={24} className='text-primary' />
                </button>
                {/* Comment Cards */}
                {
                    isLoading ? Array.from({ length: 2 }).map((_, index) => <CommentCardLoader key={index} />)
                        : <>
                            {comments?.map((comment: CommentType) => <CommentCard key={comment._id} comment={comment} />)}
                        </>
                }
            </>
            {/* Comment Form */}
            {expandCommentBox && (
                <NewsCommentForm
                    newsId={newsId}
                    formRef={formRef}
                />
            )}
        </section>
    );
};

export default NewsComment;

