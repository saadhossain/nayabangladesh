'use client'
import { getTag } from '@/app/utils/apis';
import Heading from '@/components/headings/Heading';
import NoNewsFound from '@/components/news/NoNewsFound';
import TableLoader from '@/components/spinner/TableLoader';
import TableFiltering from '@/components/TableFiltering';
import DataTable from '@/components/tables/DataTable';
import { CategoryType } from '@/types/newsTypes';
import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { tagTableColumn } from '../../tables/table-columns/tagTableColumn';


const TagsPageContent = () => {
    //Get the News from the server
    const { data: tags = [], isLoading, isSuccess } = useQuery({
        queryKey: ['tags'],
        queryFn: getTag,
    });

    // Set Default Data to this state
    const [data, setData] = useState<CategoryType[]>([]);

    useEffect(() => {
        if (isSuccess && tags.length) {
            setData(tags);
        }
    }, [tags, isSuccess]);
    //Set review columns to this state
    const [columns] = useState(() => [...tagTableColumn])
    const [globalFilter, setGlobalFilter] = useState([])

    //Declare the table here.
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter
        },
        initialState: {
            pagination: {
                pageSize: 5
            }
        },
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <div className='w-full'>
            <div className='flex gap-5 items-center justify-between mb-2'>
                <Heading title='ট্যাগসমূহ' />
                <div className='flex flex-col md:flex-row gap-2 items-center justify-end'>
                    <TableFiltering table={table} />
                </div>
            </div>
            {
                isLoading ? <TableLoader /> : <div className='w-full'>
                    {
                        tags?.length <= 0 ? <NoNewsFound /> : (
                            <DataTable table={table} />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default TagsPageContent