"use client";
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PetitionForm = ({setClicke}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const submitForm = async (data, e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/voter/vote`, data);
            console.log(res);
            if (res.status === 200) {
                setClicke(true)
                toast.success('পিটিশন সাক্ষর সফল হয়েছে');
            } else {
                toast.error('একবারের বেশি সাক্ষর করা যাবে না')
            }
        } catch (err) {
            console.log(err);
        }
    };

    

    return (
        <div className="bg-[#ffd8c412] border-r-[1px] md:border-l-[0px] border-l-[1px] md:border-b-[0px] border-b-[1px] border-[#FF7128] border-dashed rounded-lg shadow-md p-5 relative">
            {/* Top border */}
            
            <div className="absolute -top-2 left-0 right-0 h-4 bg-[#FF7128] rounded-t-lg"></div>
            {/* Form Content */}
            <h3 className="text-lg font-bold text-orange-500 mb-4 flex items-center">
                <span className="mr-2">📜</span> পিটিশন সাক্ষর করুন
            </h3>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="*আপনার নাম"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        {...register("name", {
                            required: true
                        })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="*ইমেইল"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        {...register("email", {
                            required: true
                        })}
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
                        rows="3"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold text-sm py-3 rounded-md hover:bg-orange-600"
                >
                    সম্পন্ন করুন
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default PetitionForm;
