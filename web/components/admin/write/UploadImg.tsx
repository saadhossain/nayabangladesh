'use client'

import { uploadImgToImgbb } from '@/app/utils/uploadImgToImgbb';
import Loading from '@/components/spinner/Loading';
import Placeholder from '@/public/placeHolder.png';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

const UploadImg = ({ setFeaturedImg }: { setFeaturedImg: Dispatch<SetStateAction<string>> }) => {
    const [preview, setPreview] = useState<string | any>(Placeholder);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Preview the uploaded file locally
        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        try {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('image', file);
            //Upload Image to ImgBB
            const imageUrl = await uploadImgToImgbb(formData);
            setFeaturedImg(imageUrl);
            console.log('Image uploaded successfully:', imageUrl);
            setIsUploading(false);
        } catch (error) {
            console.error('Error uploading the image:', error);
        }
    };
    return (
        <div className="flex items-center justify-center">
            <label htmlFor="file-upload" className="cursor-pointer">
                {isUploading ? <Loading /> :
                    <Image
                        src={preview}
                        alt="Upload"
                        className="w-full max-h-[240px] rounded-lg"
                        width={100}
                        height={100}
                    />
                }
            </label>
            <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
            />
        </div>
    )
}

export default UploadImg