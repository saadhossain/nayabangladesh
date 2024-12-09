'use client'
import NewsEditor from '@/components/admin/write/NewsEditor';
import NewsMetadata from '@/components/admin/write/NewsMetadata';
import { useState } from 'react';


const AddNews = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [selectedCat, setSelectedCat] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string[]>([]);
    const [featuredImg, setFeaturedImg] = useState('');
    //Save the News to Database
    const handleSubmit = async () => {
        const res = await fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, story: content, selectedCat, selectedTag, featuredImg }),
        });
        if (res.ok) {
            alert('News saved!');
        }
    };
    // console.log(selectedCat)

    return (
        <div>
            <div className='w-full flex gap-5 justify-between'>
                <NewsEditor
                    title={title}
                    content={content}
                    setTitle={setTitle}
                    setContent={setContent}
                />
                <NewsMetadata
                    setSelectedCat={setSelectedCat}
                    setSelectedTag={setSelectedTag}
                    setFeaturedImg={setFeaturedImg}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default AddNews;
