import DeleteBtn from '@/components/buttons/DeleteBtn';
import EditBtn from '@/components/buttons/EditBtn';
import { UserType } from '@/types/newsTypes';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Activity, Image, ImageIcon, Mail, MapPinned, ShieldCheck, User } from 'lucide-react';

const columnHelper = createColumnHelper<UserType>();
export const userTableColumn: ColumnDef<UserType, any>[] = [
    columnHelper.display({
        id: 'image',
        cell: (info) => <Image src={info?.row?.original?.image} alt={info?.row?.original?.name} width={100} height={80} />,
        header: () => <p className='flex items-center gap-2 pl-5' > <ImageIcon size={18} /> ছবি</p >
    }),
    columnHelper.accessor('name', {
        cell: (info) => <p className='font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='flex items-center gap-2 overflow-hidden' > <User size={18} /> নাম </p>
    }),
    columnHelper.accessor('email', {
        cell: (info) => <p className='font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='flex items-center gap-2 overflow-hidden' > <Mail size={18} /> ই-মেইল </p>
    }),
    columnHelper.accessor('role', {
        cell: (info) => <p className='font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='flex items-center gap-2 overflow-hidden' > <ShieldCheck size={18} /> রোল</p>
    }),
    columnHelper.accessor('location', {
        cell: (info) => <p className='font-semibold overflow-hidden'>{info.getValue()} </p>,
        header: () => <p className='flex items-center gap-2 overflow-hidden' > <MapPinned size={18} />শহর</p>
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