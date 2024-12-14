import DeleteBtn from '@/components/buttons/DeleteBtn';
import EditBtn from '@/components/buttons/EditBtn';
import { CategoryType } from '@/types/newsTypes';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Activity, ChartColumnStacked, IdCard, Link2 } from 'lucide-react';

const columnHelper = createColumnHelper<CategoryType>();
export const categoryTableColumn: ColumnDef<CategoryType, any>[] = [
    columnHelper.display({
        id: 'id',
        cell: (info) => <p className='px-5 font-semibold overflow-hidden'>{info?.row?.original?._id} </p>,
        header: () => <p className='px-5 flex items-center gap-2 overflow-hidden' > <IdCard size={18} /> আইডি </p>
    }),
    columnHelper.accessor('name', {
        cell: (info) => <p className='px-5 min-w-90 font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='px-5 min-w-80 flex items-center gap-2 overflow-hidden' > <ChartColumnStacked size={18} /> ক্যাটেগরি নাম </p>
    }),
    columnHelper.accessor('slug', {
        cell: (info) => <p className='px-5 min-w-40 font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='px-5 min-w-40 flex items-center gap-2 overflow-hidden' > <Link2 size={18} /> ক্যাটেগরি স্লাগ </p>
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