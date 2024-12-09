import { addNewCategory } from '@/app/utils/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { FormEvent } from 'react';
import toast from 'react-hot-toast';

const AddCategoryForm = () => {
    const queryClient = useQueryClient();
    const { mutate: useAddCategoryMutation, isPending } = useMutation({
        mutationFn: addNewCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getCategories'] })
        }
    })
    const handleAddCategory = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newCategory = form.newCat.value;
        useAddCategoryMutation(newCategory, {
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
            onSubmit={handleAddCategory}
            className='w-full mb-2 flex flex-col gap-2'>
            <input
                type="text"
                name="name"
                placeholder='ক্যাটেগরি নাম'
                className='w-full px-2 h-8 rounded focus:outline-none border border-gray-300'
            />
            <input
                type="text"
                name="slug"
                placeholder='category-slug'
                className='w-full px-2 h-8 rounded focus:outline-none border border-gray-300' />
            <button
                type='submit'
                className='w-full bg-black text-white px-1 py-1 rounded flex items-center justify-center font-semibold'
                disabled={isPending}
            ><Plus size={16} /> Add Category</button>
        </form>
    )
}

export default AddCategoryForm