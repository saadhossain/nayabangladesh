import { addNewTag } from '@/app/utils/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { FormEvent } from 'react';
import toast from 'react-hot-toast';

const AddTagForm = () => {
    const queryClient = useQueryClient();
    const { mutate: useAddTagMutation, isPending } = useMutation({
        mutationFn: addNewTag,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tags'] })
        }
    })
    const handleAddTag = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newTag = form.tag.value;
        useAddTagMutation(newTag, {
            onSuccess: (data) => {
                if (data.acknowledged) {
                    toast.success('New Category added.')
                    form.reset();
                }
            },
            onError: (error) => {
                console.error("Error adding category:", error);
            },
        });
    }
    return (
        <form
            onSubmit={handleAddTag}
            className='flex items-center w-full mb-2'>
            <input
                type="text"
                name="tag"
                placeholder='ট্যাগ নাম'
                className='w-3/4 px-2 h-8 rounded-r-none rounded-l focus:outline-none border border-gray-300' />
            <button
                type='submit'
                className='w-20 bg-black text-white px-1 py-1 rounded-r flex items-center font-semibold'
                disabled={isPending}
            ><Plus size={16} /> নতুন</button>
        </form>
    )
}

export default AddTagForm