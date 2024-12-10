'use client'
import { addNews } from '@/app/utils/apis';
import NewsEditor from '@/components/admin/write/NewsEditor';
import NewsMetadata from '@/components/admin/write/NewsMetadata';
import Heading from '@/components/headings/Heading';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';


const AddNews = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [selectedCat, setSelectedCat] = useState<{}>({});
    const [selectedUser, setSelectedUser] = useState<{}>({});
    const [selectedTag, setSelectedTag] = useState<string[]>([]);
    const [featuredImg, setFeaturedImg] = useState('');

    const queryClient = useQueryClient();
    //Save the News to Database
    const { mutate: useAddNewsMutation, isPending: newsAddingPending } = useMutation({
        mutationFn: addNews,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['news'] })
        }
    })
    const handleSubmit = async () => {
        const newsData = { title, excerpt, story: content, category: selectedCat, tags: selectedTag, reporter: selectedUser, readingCount: 0, featuredImg };
        //Save News to the Server
        useAddNewsMutation(newsData, {
            onSuccess: (data) => {
                if (data._id) {
                    toast.success('নতুন খবর যুক্ত হয়েছে.');
                    setContent('');
                    setTitle('')
                    setExcerpt('')
                    setSelectedCat({})
                    setSelectedUser({})
                    setFeaturedImg('')
                }
            },
            onError: (error) => {
                console.error("Error adding category:", error);
            },
        })
    };
    return (
        <div>
            <Heading title='নতুন খবর' />
            <div className='w-full flex gap-5 justify-between'>
                <NewsEditor
                    title={title}
                    excerpt={excerpt}
                    setExcerpt={setExcerpt}
                    content={content}
                    setTitle={setTitle}
                    setContent={setContent}
                />
                <NewsMetadata
                    setSelectedCat={setSelectedCat}
                    setSelectedUser={setSelectedUser}
                    setSelectedTag={setSelectedTag}
                    setFeaturedImg={setFeaturedImg}
                    handleSubmit={handleSubmit}
                    newsAddingPending={newsAddingPending}
                />
            </div>
        </div>
    );
};

export default AddNews;
