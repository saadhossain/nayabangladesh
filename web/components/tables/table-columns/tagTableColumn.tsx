import DeleteBtn from '@/components/buttons/DeleteBtn';
import EditBtn from '@/components/buttons/EditBtn';
import { TagType } from '@/types/newsTypes';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Activity, IdCard, Tags } from 'lucide-react';

const columnHelper = createColumnHelper<TagType>();
export const tagTableColumn: ColumnDef<TagType, any>[] = [
    columnHelper.display({
        id: 'id',
        cell: (info) => <p className='px-5 font-semibold overflow-hidden'>{info?.row?.original?._id} </p>,
        header: () => <p className='px-5 flex items-center gap-2 overflow-hidden' > <IdCard size={18} /> আইডি </p>
    }),
    columnHelper.accessor('name', {
        cell: (info) => <p className='px-5 min-w-96 font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='px-5 min-w-96 flex items-center gap-2 overflow-hidden' > <Tags size={18} /> ট্যাগ নাম </p>
    }),
    columnHelper.display({
        id: 'actions',
        cell: (info) => (
            <div className='flex gap-1 items-center justify-center'>
                <DeleteBtn />
                <EditBtn
                    id={info.row.original._id}
                    modalType='news'
                />
            </div>
        ),
        header: () => <p className='flex items-center gap-2 pr-5' > <Activity size={18} />অ্যাকশন</p >
    })
]