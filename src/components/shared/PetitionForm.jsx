"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Modal from 'react-modal';
import Link from 'next/link';

// Set the root element for the modal
// Modal.setAppElement('#__next');

const PetitionForm = ({ setClicked }) => {
    const [showShare, setShowShare] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const alertAudioRef = useRef(null);
    const submitForm = async (data, e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/voter/vote`, data);
            if (res.status === 200) {
                setClicked(true);
                setShowShare(true);
                toast.success('পিটিশন সাক্ষর সফল হয়েছে');
                if (alertAudioRef.current) {
                    alertAudioRef.current.play().catch(err => console.error("Audio playback error:", err));
                }

            } else {
                toast.error('একবারের বেশি সাক্ষর করা যাবে না');
            }
        } catch (err) {
            console.error(err);
            toast.warning('আপনি একটি ইমেইল দিয়ে একবার সাইন করতে পারবেন');
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

    const playAlertSound = () => {
        if (alertAudioRef.current) {
            alertAudioRef.current.play().catch(err => console.error("Audio playback error:", err));
        }
    };


    return (
        <div className="bg-[#ffd8c412] border-r-[1px] md:border-l-[0px] border-l-[1px] md:border-b-[0px] border-b-[1px] border-[#FF7128] border-dashed rounded-lg shadow-md p-5 relative">
            <div className="absolute -top-2 left-0 right-0 h-4 bg-[#FF7128] rounded-t-lg"></div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4 flex items-center">
                <span className="mr-2">📜</span> পিটিশন সাক্ষর করুন
            </h3>
                <form onSubmit={handleSubmit(submitForm)} className='w-full text-center'>
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
                            {...register("phone", {
                                required: true
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="মন্তব্য (ঐচ্ছিক)"
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
                    <Link href="/privacy-policy" className='underline mt-2 text-sm text-center text-[#FF7128] w-full'>প্রাইভেসি পলিসি পড়ুন</Link>
                </form>

            {/* Modal for sharing options */}
            <Modal
                isOpen={showShare}
                onRequestClose={() => setShowShare(false)}
                contentLabel="Share Petition"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-md border-none"
            >
                <div className='flex gap-x-2'>
                    <h4 className="text-xl font-semibold text-[#072E75] mb-4">Amber Alert এর অ্যালার্ট সাউন্ড শুনুন</h4>
                    <button className='text-2xl mt-[-11px]' onClick={() => playAlertSound()}>🔊</button>
                </div>
                <p className="text-gray-600 mb-6">বাংলাদেশে অ্যাম্বার অ্যালার্ট বাস্তবায়নের পর এভাবেই বেজে উঠবে আপনার ফোন যখন কোন শিশু হারিয়ে যাবে</p>
                <h4 className="text-xl font-semibold text-[#FF7128] mb-4">পিটিশন শেয়ার করুন</h4>
                <p className="text-gray-600 mb-6">আপনার সমর্থনের জন্য আমরা সত্যিই কৃতজ্ঞ। আপনার স্বাক্ষর বাংলাদেশের অ্যাম্বার অ্যালার্ট বাস্তবায়নের পথে একটি বড় পদক্ষেপ। এখন এটি আপনার বন্ধু ও পরিবারের সঙ্গে শেয়ার করে আরও মানুষকে যুক্ত করতে সাহায্য করুন।</p>
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
                    className="w-full bg-[#FF7128] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#ff874b] transition duration-300"
                >
                    বন্ধ করুন
                </button>
            </Modal>

            <ToastContainer />
            <audio ref={alertAudioRef} src="/alert.mp3" preload="auto" />
        </div>
    );
};

export default PetitionForm;
