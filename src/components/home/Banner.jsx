import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { RiVideoLine } from "react-icons/ri";
import PetitionForm from '../shared/PetitionForm';
import Progress from '../shared/Progress';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="relative">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full bg-white"
                style={{
                    background: 'linear-gradient(to top, rgba(249, 216, 212, .4) 30%, rgba(248,242,255,0.05) 70%)'
                }}
            ></div>

            {/* Scattered Beeping Location Buttons - Left Side */}
            {/* Scattered Beeping Location Buttons - Left Side */}
            <div className="absolute top-0 left-0 h-full flex flex-col p-4 w-[30vw] items-center">
                <div className="relative mb-4">
                    <span className="alarm-indicator" style={{ animationDelay: '0s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '0s' }}>খুলনা</button>
                </div>
                <div className="relative mb-4 right-[-40%]">
                    <span className="alarm-indicator" style={{ animationDelay: '0.1s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '0.1s' }}>যশর</button>
                </div>
                <div className="relative">
                    <span className="alarm-indicator" style={{ animationDelay: '1.3s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '1.3s' }}>সিলেট</button>
                </div>
            </div>

            {/* Scattered Beeping Location Buttons - Right Side */}
            <div className="absolute top-0 right-0 h-full flex flex-col w-[30vw] items-center p-4">
                <div className="relative mb-4">
                    <span className="alarm-indicator" style={{ animationDelay: '1s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '1s' }}>ঢাকা</button>
                </div>
                <div className="relative mb-4 left-[-40%]">
                    <span className="alarm-indicator" style={{ animationDelay: '1.5s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '1.5s' }}>চট্টগ্রাম</button>
                </div>
                <div className="relative">
                    <span className="alarm-indicator" style={{ animationDelay: '.5s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '.5s' }}>বরিশাল</button>
                </div>
            </div>

            {/* Main Banner Content */}
            <h2 className='!leading-[1.5] text-3xl md:text-5xl font-bold mt-20 text-[#072E75] text-center'>
                বাংলাদেশে শিশু নিখোঁজ <br />
                প্রতিরোধ করতে সামিল হোন আপনিও!
            </h2>

            <div className='flex justify-center items-center mt-4 gap-x-4'>
                <button className="flex items-center gap-x-2 bg-[#FF7128] border-[#FF7128] border-[1.5px] text-[#fff] px-6 py-2 rounded-lg ">
                    <IoDocumentTextOutline className="text-xl" /> চিঠি পড়ুন
                </button>
                <button className="flex items-center gap-x-2 border-[#072E75] border-[1.5px] text-[#072E75] px-6 py-2 rounded-lg ">
                    <RiVideoLine className="text-xl" />ভিডিও পাঠান
                </button>
            </div>

            {/* Image and Petition Form */}
            <div className='relative mt-10'>
                <Image
                    src="/hand.png"
                    alt="hand"
                    width={1300}
                    height={800}
                    className="absolute top-[3%] left-1/2 -translate-x-1/2"
                />

                <div className="flex flex-col md:flex-row max-w-[700px] mx-auto items-center bg-[#fff] border-[1px] rounded-lg border-dashed border-[#FF7128] mt-6 relative">
                    <div className="w-full md:w-1/2">
                        <PetitionForm />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Progress />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;
