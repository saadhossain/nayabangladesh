'use client';

import { MessageSquareMore } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const NewsComment = () => {
    const [expandCommentBox, setExpandCommentBox] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.readerName.value as string;
        const email = form.email.value;
        const comment = form.comment.value;
        console.log(name, email, comment);
    };

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
        <div>
            <button
                onClick={toggleCommentBox}
                className='flex items-center gap-2'
            >
                <p className='text-lg font-semibold hover:text-primary duration-300 ease-in-out'>মন্তব্য করুন</p>
                <MessageSquareMore size={24} className='text-primary' />
            </button>
            {/* Comment Form */}
            {expandCommentBox && (
                <form
                    ref={formRef} // Attach the ref to the form
                    onSubmit={(e) => handleComment(e)}
                    className="w-10/12 mt-5"
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
                    <Button type='submit' className='mt-3 font-semibold'>মতামত দিন</Button>
                </form>
            )}
        </div>
    );
};

export default NewsComment;

