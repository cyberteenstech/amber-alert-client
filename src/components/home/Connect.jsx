"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const Connect = () => {
    const { language } = useLanguage();
    return (
        <div className='bg-[#ffd8c412] p-6 rounded-lg relative h-[30vh] max-w-[1340px] mx-auto w-full overflow-hidden'>
            <Image
                src="/hand.png"
                alt="hand"
                width={1000}
                height={800}
                className="absolute md:top-[0%] top-[42.5%] left-1/2 -translate-x-1/2"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-4">
                    {language === "bn" ? "আমাদের সাথে " : "Join"}
                    <span className="text-[#FF7128]">
                       {language === "bn" ? "যুক্ত হোন" : "Us"}  
                    </span>
                </h2>
                <p className="text-center text-[#072e75cb] mb-6">{language === "bn" ? "এই দাবীর অংশীদার হতে সাথে" : "Connect with us to be a part of this campaign"}</p>
                <Link
                    href="https://forms.gle/JGMECekHC59HRwdT7"
                    className="flex items-center justify-center gap-x-2 bg-[#FF7128] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e56523] transition-colors"
                >
                    {language === "bn" ? "ক্লিক করুন" : "Click Here"}   
                </Link>
            </div>
        </div>
    );
};

export default Connect;

