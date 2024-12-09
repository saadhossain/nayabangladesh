'use client'
import NewsEditor from '@/components/admin/write/NewsEditor';
import NewsMetadata from '@/components/admin/write/NewsMetadata';
import { Button } from '@/components/ui/button';
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
        <div className='container mx-auto my-14 relative'>
            {/* Submit button */}
            <Button
                onClick={handleSubmit}
                className='absolute right-10 top-0  px-10'
            >Publish</Button>
            <div className='flex gap-5 justify-between'>
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
                />
            </div>
        </div>
    );
};

export default AddNews;
