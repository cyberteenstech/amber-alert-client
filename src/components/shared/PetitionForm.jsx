"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PetitionForm = ({ setClicked }) => {
    const [showShare, setShowShare] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitForm = async (data, e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/voter/vote`, data);
            if (res.status === 200) {
                setClicked(true);
                setShowShare(true);
                toast.success('পিটিশন সাক্ষর সফল হয়েছে');
            } else {
                toast.error('একবারের বেশি সাক্ষর করা যাবে না');
            }
        } catch (err) {
            console.error(err);
            toast.error('একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
        }
    };

    const shareToSocialMedia = (platform) => {
        const text = encodeURIComponent("আমি একটি গুরুত্বপূর্ণ পিটিশনে সাক্ষর করেছি। আপনিও যোগ দিন এবং পরিবর্তন আনুন!");
        const url = encodeURIComponent(window.location.href);

        let shareUrl = '';
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
                break;
        }

        window.open(shareUrl, '_blank');
    };

    return (
        <div className="bg-[#ffd8c412] border-r-[1px] md:border-l-[0px] border-l-[1px] md:border-b-[0px] border-b-[1px] border-[#FF7128] border-dashed rounded-lg shadow-md p-5 relative">
            <div className="absolute -top-2 left-0 right-0 h-4 bg-[#FF7128] rounded-t-lg"></div>
            <h3 className="text-lg font-bold text-orange-500 mb-4 flex items-center">
                <span className="mr-2">📜</span> পিটিশন সাক্ষর করুন
            </h3>
            {!showShare ? (
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="*আপনার নাম"
                            className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="*ইমেইল"
                            className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="tel"
                            placeholder="মোবাইল"
                            className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            {...register("phone")}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="মন্তব্য"
                            className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            rows={3}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-semibold text-sm py-3 rounded-md hover:bg-orange-600"
                    >
                        সম্পন্ন করুন
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <h4 className="text-lg font-semibold mb-4">পিটিশন সাক্ষর করার জন্য ধন্যবাদ!</h4>
                    <p className="mb-4">এই পিটিশন শেয়ার করে আরও মানুষের কাছে পৌঁছে দিন:</p>
                    <div className="flex justify-center space-x-4">
                        <Button onClick={() => shareToSocialMedia('facebook')} className="bg-blue-600 hover:bg-blue-700">
                            <Share2 className="mr-2 h-4 w-4" /> Facebook
                        </Button>
                        <Button onClick={() => shareToSocialMedia('twitter')} className="bg-sky-500 hover:bg-sky-600">
                            <Share2 className="mr-2 h-4 w-4" /> Twitter
                        </Button>
                        <Button onClick={() => shareToSocialMedia('linkedin')} className="bg-blue-700 hover:bg-blue-800">
                            <Share2 className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default PetitionForm;