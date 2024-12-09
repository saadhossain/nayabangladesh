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
            className='flex items-center w-full mb-2'>
            <input type="text" name="newCat" className='w-3/4 px-2 h-8 rounded-r-none rounded-l focus:outline-none border border-gray-300' />
            <button
                type='submit'
                className='w-1/4 bg-black text-white px-1 py-1 rounded-r flex items-center font-semibold'
                disabled={isPending}
            ><Plus size={16} /> New</button>
        </form>
    )
}

export default AddCategoryForm