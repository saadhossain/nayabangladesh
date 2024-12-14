import NayaBangladesh from '@/public/images/nayagangladesh.gif';
import Image from 'next/image';

const LoadingSpinner = () => {
    return (
        <div className='container mx-auto my-5 h-[70vh] flex flex-col justify-center items-center'>
            <Image src={NayaBangladesh} alt='NayaBangladesh' width={200} height={200} />
        </div>
    );
};

export default LoadingSpinner;