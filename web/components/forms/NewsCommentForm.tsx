'use client';

import { addComment } from '@/app/utils/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, RefObject } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const NewsCommentForm = ({ newsId, formRef }: { newsId: string, formRef: RefObject<HTMLFormElement> }) => {
    const queryClient = useQueryClient();
    const { mutate: useAddCommentMutation, isPending } = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getComments'] })
        }
    })

    const handleAddComment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const readerName = form.readerName.value as string;
        const email = form.email.value;
        const comment = form.comment.value;
        const commentData = {
            newsId,
            readerName,
            email,
            comment
        }
        //Save the Comment to the Server
        useAddCommentMutation(commentData, {
            onSuccess: (data) => {
                if (data._id) {
                    toast.success('নতুন কমেন্ট যুক্ত হয়েছে.');
                    form.reset();
                }
            }
        })
    };

    return (
        <form
            ref={formRef} // Attach the ref to the form
            onSubmit={(e) => handleAddComment(e)}
            className="w-11/12 mx-auto mt-5"
        >
            <div className='w-full flex gap-5'>
                <div className='w-2/4'>
                    <Label htmlFor="readerName" className='font-semibold'>নাম</Label>
                    <Input type="text" id="readerName" className='mt-2' />
                </div>
                <div className='w-2/4'>
                    <Label htmlFor="email" className='font-semibold'>ই-মেইল</Label>
                    <Input type="email" id="email" className='mt-2' />
                </div>
            </div>
            <div className='mt-5'>
                <Label htmlFor="comment" className='block mb-2 font-semibold'>মন্তব্য</Label>
                <textarea
                    className='w-full rounded mt-2 bg-transparent border p-2'
                    cols={40}
                    rows={4}
                    name='comment'
                    id='comment'
                ></textarea>
            </div>
            <Button
                type='submit'
                className='mt-3 font-semibold text-white'
                disabled={isPending}
            >মতামত দিন</Button>
        </form>
    )
}

export default NewsCommentForm