"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Modal from 'react-modal';

// Set the root element for the modal
// Modal.setAppElement('#__next');

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
        const url = encodeURIComponent(window.location.href); // Current page URL

        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer.php?u=${url}&quote=${text}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
                break;
            default:
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
                        className="w-full bg-orange-500 text-white font-semibold text-sm py-3 rounded-md hover:bg-orange-600 transition duration-300"
                    >
                        সম্পন্ন করুন
                    </button>
                </form>
            ) : (
                <div className="text-center space-y-6">
                    <h4 className="text-xl font-semibold text-gray-800">পিটিশন সাক্ষর করার জন্য ধন্যবাদ!</h4>
                    <p className="text-gray-600">এই পিটিশন শেয়ার করে আরও মানুষের কাছে পৌঁছে দিন:</p>
                    <button
                        onClick={() => setShowShare(true)}
                        className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                        <Share2 className="mr-2 h-5 w-5" />
                    </button>
                </div>
            )}

            {/* Modal for sharing options */}
            <Modal
                isOpen={showShare}
                onRequestClose={() => setShowShare(false)}
                contentLabel="Share Petition"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
            >
                <h4 className="text-xl font-semibold text-gray-800 mb-4">পিটিশন শেয়ার করুন</h4>
                <p className="text-gray-600 mb-6">আপনার বন্ধুদের সাথে শেয়ার করুন:</p>
                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        onClick={() => shareToSocialMedia('facebook')}
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                        <Facebook className="mr-2 h-5 w-5" />
                    </button>
                    <button
                        onClick={() => shareToSocialMedia('twitter')}
                        className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                        <Twitter className="mr-2 h-5 w-5" />
                    </button>
                    <button
                        onClick={() => shareToSocialMedia('linkedin')}
                        className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                        <Linkedin className="mr-2 h-5 w-5" />
                    </button>
                </div>
                <button
                    onClick={() => setShowShare(false)}
                    className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                    বন্ধ করুন
                </button>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default PetitionForm;
