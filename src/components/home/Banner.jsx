"use client";
                                    
import React, {useState, useEffect } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { RiVideoLine } from "react-icons/ri";
import PetitionForm from '../shared/PetitionForm';
import Progress from '../shared/Progress';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const [clicked, setClicked] = useState(false)
    const [voters, setVoters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Fetch voter data
    const getVotersData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/voter`);
            console.log(res);
            setVoters(res.data.data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getVotersData();
    }, []);
    const toBangla = (number) => {
        const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return number
            .toString()
            .split("")
            .map((digit) => banglaDigits[parseInt(digit)])
            .join("");
    };

    // Calculate progress as a percentage (assuming 100,000 is the goal)
    const progress = (voters.length / 500000) * 100;

    const openLinkToForm = () => {
        //    open in new tab
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSc5FXjbnvaIV_0GtEEYeG-zDZgbvEczU-GmIcQgXinH-EDuXg/viewform', '_blank');
    }
    return (
        <div className="relative">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full bg-white"
                style={{
                    background: 'linear-gradient(to top, rgba(249, 216, 212, .4) 30%, rgba(248,242,255,0.05) 70%)'
                }}
            ></div>

            <div className="absolute top-0 left-0 h-full flex flex-col p-4 w-[30vw] items-center">
                <div className="relative mb-4 md:top-0 top-[-3%]">
                    <span className="alarm-indicator" style={{ animationDelay: '0s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '0s' }}>খুলনা</button>
                </div>
                <div className="relative mb-4 md:right-[-40%] right-[20%]">
                    <span className="alarm-indicator" style={{ animationDelay: '0.1s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '0.1s' }}>যশর</button>
                </div>
                <div className="relative md:block hidden">
                    <span className="alarm-indicator" style={{ animationDelay: '1.3s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '1.3s' }}>সিলেট</button>
                </div>
            </div>

            {/* Scattered Beeping Location Buttons - Right Side */}
            <div className="absolute top-0 right-0 h-full flex flex-col w-[30vw] items-center p-4">
                <div className="relative mb-4 md:top-0 top-[-3%]">
                    <span className="alarm-indicator" style={{ animationDelay: '1s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '1s' }}>ঢাকা</button>
                </div>
                <div className="relative mb-4 md:left-[-40%] left-[20%]">
                    <span className="alarm-indicator" style={{ animationDelay: '1.5s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '1.5s' }}>চট্টগ্রাম</button>
                </div>
                <div className="relative md:block hidden">
                    <span className="alarm-indicator" style={{ animationDelay: '.5s' }}></span>
                    <button className="outline-button" style={{ animationDelay: '.5s' }}>বরিশাল</button>
                </div>
            </div>

            {/* Main Banner Content */}
          
            <h2 className='!leading-[1.5] text-3xl md:text-5xl font-bold mt-20 text-[#072E75] text-center flex flex-col justify-center'>
                <span className='text-sm md:text-base text-[#FF7128] text-center'>#every_child_matters</span>
                বাংলাদেশে শিশু নিখোঁজ <br />
                প্রতিরোধ করতে সামিল হোন আপনিও!
            </h2>

            <div className='flex justify-center items-center mt-4 gap-x-4'>
                <Link href="#letter-section" passHref>
                    <button className="flex items-center gap-x-2 bg-[#FF7128] border-[#FF7128] border-[1.5px] text-[#fff] md:px-6 px-4 py-2 rounded-lg ">
                        <IoDocumentTextOutline className="md:text-xl text-lg" /> চিঠি পড়ুন
                    </button></Link>
                
                <Link href="#video-section" passHref _blank>
                    <button className="flex items-center gap-x-2 border-[#072E75] border-[1.5px] text-[#072E75] md:px-6 px-4 py-2 rounded-lg ">
                        <RiVideoLine className="md:text-xl text-lg" />
                        ভিডিও দেখুন
                    </button>
                </Link>
            </div>

            <div className="flex items-center justify-around max-w-[1440px] w-full mx-auto">
                <Image
                    src="/muntaha.png"
                    alt="muntaha"
                    width={200}
                    height={200}
                    className="rounded-lg image-beep md:w-[200px] w-[100px] md:block hidden"
                    style={{ animationDelay: '0s' }}
                />

                {/* Image and Petition Form */}
                <div className='relative mt-10 w-full'>
                    <Image
                        src="/hand.png"
                        alt="hand"
                        width={1300}
                        height={800}
                        className="absolute md:top-[27%] top-[69.5%] left-1/2 -translate-x-1/2"
                    />

                    <div className="flex flex-col md:flex-row max-w-[600px] w-full mx-auto items-center md:bg-[#fff] md:border-[1px] rounded-lg border-dashed border-[#FF7128] md:mt-6 mt-0 relative">
                        <div className="md:hidden block w-[70%]">
                            <div className="flex items-center justify-between mb-2 w-full">
                                <h3 className="text-[12px] text-[#072E75]">
                                    <span className="font-medium text-[12px]">{toBangla(voters.length)}</span> সাক্ষর
                                </h3>
                                <span className="text-[#072E75] text-[12px]">
                                    প্রয়োজন <span className="text-[#FF7128] font-medium text-[12px]">৫,০০,০০০</span>
                                </span>
                            </div>
                            
                            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                                <div
                                    className="bg-orange-500 h-2 rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-[70%] md:w-1/2">
                            <PetitionForm setClicked={setClicked}/>
                        </div>
                        <div className="w-full md:w-1/2 md:block hidden">
                            <Progress 
                            setClicked={setClicked}
                            clicked={clicked}/>
                        </div>
                    </div>
                </div>

                <Image
                    src="/child2.png"
                    alt="child2"
                    width={200}
                    height={200}
                    className="rounded-lg image-beep md:w-[200px] w-[100px] md:block hidden"
                    style={{ animationDelay: '.5s' }}
                />
            </div>
            <div className='md:block hidden'>
                <div className='flex justify-center items-center gap-x-4 mt-8 '>
                    <Image
                        src="/child2.png"
                        alt="muntaha"
                        width={200}
                        height={200}
                        className="rounded-lg image-beep md:w-[200px] w-[100px]"
                        style={{ animationDelay: '1s' }}
                    />
                    <Image
                        src="https://i.ibb.co.com/cvkd1gS/image.png"
                        alt="muntaha"
                        width={200}
                        height={200}
                        className="rounded-lg image-beep md:w-[200px] w-[100px]"
                        style={{ animationDelay: '1.8s' }}
                    />
                    <Image
                        src="/child2.png"
                        alt="muntaha"
                        width={200}
                        height={200}
                        className="rounded-lg image-beep md:w-[200px] w-[100px]"
                        style={{ animationDelay: '1.4s' }}
                    />
                    <Image
                        src="/muntaha.png"
                        alt="muntaha"
                        width={200}
                        height={200}
                        className="rounded-lg image-beep md:w-[200px] w-[100px]"
                        style={{ animationDelay: '1.8s' }}
                    />
                </div>
            </div>
            
            
        </div>


    );
};

export default Banner;
