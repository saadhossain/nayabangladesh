'use client';

import { uploadImgToImgbb } from '@/app/utils/uploadImgToImgbb';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Processing from '../spinner/Processing';

const RegisterForm = () => {
    // State for processing status
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    //Set the FormData to the State as object when input changes
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const { data: session } = useSession();
    const [error, setError] = useState('');
    //Save the User to the Database.
    const handleUserRegistration = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        //Validations
        if (!formData.email || !formData.name || !formData.password) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }

        if (formData.password.length < 10) {
            setError('Password must be at least 10 characters long');
            setLoading(false);
            return;
        }

        //Handle profile image and upload to Imgbb
        const imageInput = form.profileImage.files[0];
        //check if image uploaded
        if (!imageInput) {
            setError('Please upload the image, its required.');
            setLoading(false);
            return;
        }
        const imageFormData = new FormData();
        imageFormData.append('image', imageInput);
        const profileImg = await uploadImgToImgbb(imageFormData);

        //Arrange User data
        const userData = {
            ...formData,
            image: profileImg,
            role: 'author'
        };
        // console.log(userData);
        try {
            //Save user data to database
            const res = await fetch(`http://localhost:4000/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            if (data._id) {
                form.reset();
                setLoading(false);
                toast.success('User Registration Successfully.');
                signIn('credentials', {
                    email: formData.email,
                    password: formData.password,
                    redirect: false
                });
                redirect('/dashboard');
            }
        } catch (error: any) {
            console.log(error.message);
            setLoading(false);
        }
    };
    //After registration redirect the user to account page
    if (session) {
        redirect('/dashboard');
    };
    return (
        <form onSubmit={(e) => handleUserRegistration(e)} className="space-y-6">
            <div className="space-y-2">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">ইমেইল অ্যাড্রেস</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm">নাম</label>
                    <input type="text" name="name" id="name" placeholder="আঃ হান্নান" className="w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className='relative'>
                    <label htmlFor="password" className="text-sm">পাসওয়ার্ড</label>
                    <input type={`${showPassword ? 'password' : 'text'}`} name="password" id="password" placeholder="***************" className="w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none"
                        required
                        onChange={handleInputChange}
                    />
                    {/* Eye button for hide and show password */}
                    <div
                        onClick={() => setShowPassword(!showPassword)}
                        className='cursor-pointer absolute top-9 right-2'
                    >
                        {
                            showPassword ? <FaEye /> : <FaEyeSlash />
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="profileImage" className="text-sm">প্রোফাইল ছবি</label>
                    <input type="file" name="profileImage" id="profileImage" className="w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="location" className="block mb-2 text-sm">শহরের নাম</label>
                    <input type="text" name="location" id="location" placeholder="ঢাকা" className="w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none"
                        required
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {
                error &&
                <div className="text-red-500 text-lg">
                    {error}
                </div>
            }
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full flex items-center justify-center px-8 py-3 font-semibold rounded-md bg-primary text-white">{loading ? <Processing title={'রেজিস্টার হচ্ছে'} /> : 'Register'}</button>
                </div>
                <p className="px-6 text-sm text-center text-gray-400">আগে রেজিস্টার করেছেন?
                    <Link href="/login" className="text-primary hover:text-secondary ml-2 text-lg font-semibold">লগিন করুন</Link>.
                </p>
            </div>
        </form>
    );
};

export default RegisterForm;