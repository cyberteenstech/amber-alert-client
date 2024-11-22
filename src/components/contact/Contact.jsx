"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaTag, FaComment } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitForm = async (data, e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/contact/sendEmail`, data);
            if (res.status === 200) {
                setIsSubmitted(true);
                toast.success('আপনার বার্তা সফলভাবে পাঠানো হয়েছে');
            } else {
                toast.error('বার্তা পাঠানো ব্যর্থ হয়েছে');
            }
        } catch (err) {
            console.error(err);
            toast.error('একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-[#ffd8c412] border-r-[1px] border-l-[1px] border-b-[1px] border-[#FF7128] border-dashed rounded-lg shadow-md p-5 relative">
                <div className="absolute -top-2 left-0 right-0 h-4 bg-[#FF7128] rounded-t-lg"></div>
                <h2 className="text-2xl font-bold text-[#1a237e] mb-6 flex items-center justify-center">
                    <span className="mr-2">📞</span> যোগাযোগ করুন
                </h2>
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="mb-3 relative">
                            <FaUser className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="*আপনার নাম"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7128]"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500 text-xs">এই ক্ষেত্রটি আবশ্যক</span>}
                        </div>
                        <div className="mb-3 relative">
                            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="*ইমেইল"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7128]"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            {errors.email && <span className="text-red-500 text-xs">সঠিক ইমেইল প্রদান করুন</span>}
                        </div>
                        <div className="mb-3 relative">
                            <FaPhone className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="tel"
                                placeholder="মোবাইল"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7128]"
                                {...register("phone")}
                            />
                        </div>
                        <div className="mb-3 relative">
                            <FaTag className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="*বিষয়"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7128]"
                                {...register("subject", { required: true })}
                            />
                            {errors.subject && <span className="text-red-500 text-xs">এই ক্ষেত্রটি আবশ্যক</span>}
                        </div>
                        <div className="mb-3 relative">
                            <FaComment className="absolute top-3 left-3 text-gray-400" />
                            <textarea
                                placeholder="*আপনার বার্তা"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7128]"
                                rows={4}
                                {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && <span className="text-red-500 text-xs">এই ক্ষেত্রটি আবশ্যক</span>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#FF7128] text-white font-semibold text-sm py-3 rounded-md hover:bg-[#FF5500] transition duration-300 flex items-center justify-center"
                        >
                            <FaPaperPlane className="mr-2" />
                            বার্তা পাঠান
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-6">
                        <h4 className="text-xl font-semibold text-[#1a237e]">ধন্যবাদ!</h4>
                        <p className="text-gray-600">আপনার বার্তা আমাদের কাছে পৌঁছেছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;

