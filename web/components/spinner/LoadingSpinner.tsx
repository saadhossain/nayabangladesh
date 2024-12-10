
const LoadingSpinner = () => {
    return (
        <div className='container mx-auto my-5 h-[70vh] flex flex-col justify-center items-center'>
            <div className="w-14 h-14 border-4 border-dashed border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;