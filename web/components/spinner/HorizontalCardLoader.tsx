
const HorizontalCardLoader = () => {
    return (
        <div className='flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-900 p-2 rounded mb-4 animate-pulse'>
            <div
                className='w-2/5 bg-gray-500 dark:bg-gray-950 rounded-md h-[100px] animate-pulse'
            ></div>
            <div className='w-3/5 flex flex-col gap-3'>
                <div className='w-8/12 bg-gray-500 dark:bg-gray-950 h-2 animate-pulse rounded-md'></div>
                <div className='w-full bg-gray-500 dark:bg-gray-950 h-2 animate-pulse rounded-md'></div>
                <div className='w-10/12 bg-gray-500 dark:bg-gray-950 h-2 animate-pulse rounded-md'></div>
                <div className='w-11/12 bg-gray-500 dark:bg-gray-950 h-2 animate-pulse rounded-md'></div>
            </div>
        </div>
    )
}

export default HorizontalCardLoader