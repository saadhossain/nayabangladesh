
const CommentCardLoader = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md p-6 my-5 animate-pulse'>
            {/* Comment Details */}
            <div className='flex flex-col gap-4'>
                <div className='w-full bg-gray-400 dark:bg-gray-900 h-2 animate-pulse rounded-md'></div>
                <div className='w-full bg-gray-400 dark:bg-gray-900 h-2 animate-pulse rounded-md'></div>
                <div className='w-full bg-gray-400 dark:bg-gray-900 h-2 animate-pulse rounded-md'></div>
            </div>
            {/* Reporter and Time */}
            <div className='flex items-center gap-5 mt-5'>
                <div
                    className='w-12 bg-gray-400 dark:bg-gray-900 rounded-full h-12 animate-pulse'
                ></div>
                <div className='w-3/5 flex flex-col gap-3'>
                    <div className='w-8/12 bg-gray-400 dark:bg-gray-900 h-2 animate-pulse rounded-md'></div>
                    <div className='w-full bg-gray-400 dark:bg-gray-900 h-2 animate-pulse rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

export default CommentCardLoader