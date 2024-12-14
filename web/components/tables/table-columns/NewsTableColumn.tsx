import DeleteBtn from '@/components/buttons/DeleteBtn';
import EditBtn from '@/components/buttons/EditBtn';
import { NewsType } from '@/types/newsTypes';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Activity, ChartColumnStacked, ChartNoAxesGantt, ImageIcon, UserRoundPen } from 'lucide-react';
import Image from 'next/image';

const columnHelper = createColumnHelper<NewsType>();
export const newsTableColumn: ColumnDef<NewsType, any>[] = [
    columnHelper.display({
        id: 'image',
        cell: (info) => <Image src={info?.row?.original?.featuredImg} alt={info?.row?.original?.title} width={100} height={80} />,
        header: () => <p className='flex items-center gap-2 pl-5' > <ImageIcon size={18} /> ছবি</p >,
    }),
    columnHelper.accessor('title', {
        cell: (info) => <p className='font-semibold max-w-80 overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='flex items-center gap-2 max-w-80 overflow-hidden' > <ChartNoAxesGantt size={18} /> শিরোনাম </p>
    }),
    columnHelper.display({
        id: 'category',
        cell: (info) => <p className='font-semibold'>{info?.row?.original?.category?.name}</p>,
        header: () => <p className='flex items-center gap-2'><ChartColumnStacked />ক্যাটেগরি </p>
    }),
    columnHelper.display({
        id: 'reporter',
        cell: (info) => <p className='font-semibold'>{info?.row?.original?.reporter?.name}</p>,
        header: () => <p className='flex items-center gap-2'><UserRoundPen /> রিপোর্টার</p>
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