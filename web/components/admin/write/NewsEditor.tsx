'use client'
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

type editorProps = {
    title: string,
    excerpt: string,
    content: string,
    setTitle: Dispatch<SetStateAction<string>>,
    setExcerpt: Dispatch<SetStateAction<string>>,
    setContent: Dispatch<SetStateAction<string>>
}

const NewsEditor = ({ title, excerpt, setExcerpt, content, setTitle, setContent }: editorProps) => {

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ color: [] }, { background: [] }],
            ['link', 'image', 'video'],
            ['blockquote', 'code-block'],
            ['clean'],
        ],
    };

    return (
        <div className='w-3/4'>
            <div className='my-3'>
                <label htmlFor="heading" className='font-semibold'>খবরের হেডলাইন</label>
                <input type="text" id='heading'
                    placeholder='খবরের হেডলাইন লিখুন'
                    className='w-full border border-gray-300 rounded p-3 mt-2'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='my-3'>
                <label htmlFor="excerpt" className='font-semibold'>খবরের সারাংশ</label>
                <textarea
                    id="excerpt"
                    placeholder='খবরের সারাংশ লিখুন'
                    className='w-full border border-gray-300 rounded p-3 mt-2'
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                ></textarea>
            </div>
            <label htmlFor="heading" className='font-semibold'>বিস্তারিত খবর</label>
            <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                modules={modules}
            />
        </div>
    )
}

export default NewsEditor