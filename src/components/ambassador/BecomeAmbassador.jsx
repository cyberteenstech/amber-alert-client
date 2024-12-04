"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const content = {
    en: {
        title: "Join us as an ambassador",
        description: `Join us as an Amber Alert Bangladesh Ambassador and play a vital role in safeguarding the lives of children across the country. 
            As an ambassador, you will help raise awareness, spread crucial alerts, and educate communities about child safety and prevention measures. 
            Together, we can create a safer environment for every child.
            `,
        points: [
            "Be part of a life-saving mission.",
            "Empower communities with vital information.",
            "Enhance your leadership and advocacy skills."
        ],
        endDesc: `How to join:
            Simply fill out the form below and take the first step toward making a meaningful impact.`,
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        age: "Age",
        address: "Address",
        pictureLink: "Picture Link",
        reason: "Why do you want to become an ambassador?",
        submit: "Submit Application",
        ageError: "You must be at least 18 years old",
        requiredError: "This field is required",
    },
    bn: {
        title: "আমাদের অ্যাম্বাসেডর হিসেবে যোগ দিন",
        description: `আম্বার অ্যালার্ট বাংলাদেশ অ্যাম্বাসাডর হয়ে দেশের শিশুদের জীবন রক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করুন। 
            একজন অ্যাম্বাসাডর হিসেবে আপনি সচেতনতা বৃদ্ধি করবেন, গুরুত্বপূর্ণ অ্যালার্ট ছড়িয়ে দেবেন এবং শিশু নিরাপত্তা ও প্রতিরোধমূলক ব্যবস্থা সম্পর্কে সম্প্রদায়কে শিক্ষা দেবেন। 
            একসাথে আমরা প্রতিটি শিশুর জন্য একটি নিরাপদ পরিবেশ তৈরি করতে পারি।
            
            `,
        points: [
            "জীবন বাঁচানোর একটি মিশনের অংশ হোন।",
            "গুরুত্বপূর্ণ তথ্য দিয়ে সম্প্রদায়কে ক্ষমতায়ন করুন।",
            "নেতৃত্ব ও অ্যাডভোকেসি দক্ষতা বৃদ্ধি করুন।"
        ],
        endDesc: `কিভাবে যোগ দেবেন:
            নিচের ফর্মটি পূরণ করুন এবং একটি অর্থবহ পরিবর্তনের পথে আপনার প্রথম পদক্ষেপ নিন।`,
        name: "নাম",
        email: "ইমেইল",
        phone: "ফোন নম্বর",
        age: "বয়স",
        address: "ঠিকানা",
        pictureLink: "ছবির লিংক",
        reason: "আপনি কেন অ্যাম্বাসেডর হতে চান?",
        submit: "আবেদন জমা দিন",
        ageError: "আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে",
        requiredError: "এই ক্ষেত্রটি পূরণ করা আবশ্যক",
    },
};


const BecomeAmbassador = () => {
    const { language } = useLanguage();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/ambassador/create`, data);

            if (res.status === 200) {
                toast.success('আপনার আবেদনটি সফলভাবে পাঠানো হয়েছে');
            }
            else {
                toast.error('আবেদন পাঠানো ব্যর্থ হয়েছে');
            }
        }catch(e){
            toast.error('আবেদন পাঠানো ব্যর্থ হয়েছে');
            console.log(e)
        }
    };

    const t = content[language];

    return (
        <div className="relative min-h-screen">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full bg-white"
                style={{
                    background:
                        "linear-gradient(to top, rgba(249, 216, 212, .4) 30%, rgba(248,242,255,0.05) 70%)",
                }}
            ></div>

            <div className="max-w-[1440px] w-full mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side: Join us as an ambassador */}
                    <div className="lg:w-1/2 space-y-4">
                        <h1 className="text-4xl font-bold text-[#072E75] md:text-start text-cetner">{t.title}</h1>
                        <div className="text-lg text-gray-700 md:w-[70%] w-full">
                            {/* Render description as paragraph */}
                            <p>{t.description}</p>

                            {/* Render points as a list */}
                            <ul className="list-disc pl-6 my-4">
                                {t.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            <p>{t.endDesc}</p>
                        </div>
                    </div>




                    {/* Right side: Form */}
                    <div className="lg:w-1/2 w-full">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6 bg-white p-8 rounded-lg shadow-md"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {t.name}
                                    </label>
                                    <input
                                        id="name"
                                        {...register("name", { required: t.requiredError })}
                                          className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {t.email}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { required: t.requiredError })}
                                          className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {t.phone}
                                    </label>
                                    <input
                                        id="email"
                                        type="number"
                                        {...register("phone", { required: t.requiredError })}
                                          className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="age"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {t.age}
                                    </label>
                                    <input
                                        id="age"
                                        type="number"
                                        {...register("age", {
                                            required: t.requiredError,
                                            min: { value: 18, message: t.ageError },
                                        })}
                                          className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    {errors.age && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.age.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {t.address}
                                    </label>
                                    <input
                                        id="address"
                                        {...register("address", { required: t.requiredError })}
                                          className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    {errors.address && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.address.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="pictureLink"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {t.pictureLink}
                                    </label>
                                    <input
                                        id="pictureLink"
                                        {...register("pictureLink", { required: t.requiredError })}
                                          className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    {errors.pictureLink && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.pictureLink.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="reason"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {t.reason}
                                </label>
                                <textarea
                                    id="reason"
                                    {...register("reason", { required: t.requiredError })}
                                      className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                {errors.reason && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.reason.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="flex items-center gap-x-2 bg-[#FF7128] text-[#fff] px-4 py-2 rounded-lg w-full text-center justify-center"
                            >
                                {t.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BecomeAmbassador;
