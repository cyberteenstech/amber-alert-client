"use client";
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
const Supporters = () => {
    const { language, changeLanguage } = useLanguage();
    const datas = [
        "https://i.ibb.co.com/f8mp9vV/image.png",
        "https://i.ibb.co.com/VwwQwbM/images.png",
        "/cyberteens.png",
        "/amberalert.png",
        "/13219.jpg",
        "https://i.ibb.co.com/p03TcbZ/untitled-design-4-3-1.webp"

    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[60px] overflow-hidden">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                {language === "bn" ? "শিশু নিখোঁজের বিরুদ্ধে" : "Let's stand together"}{" "}
                <span className="text-[#FF7128]"> {language === "bn" ? "রুখে দাড়াই একসাথে" : "against child abductions"}</span>
            </h2>
            <div className="relative">
                <div className="whitespace-nowrap animate-marquee text-2xl font-semibold text-[#072E75] flex items-center gap-x-8">
                    {datas.map((data, index) => (
                        <Image
                            key={index}
                            src={data}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    ))}
                    {datas.map((data, index) => (
                        <Image
                            key={index}
                            src={data}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    ))}
                    {datas.map((data, index) => (
                        <Image
                            key={index}
                            src={data}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    ))}
                    {datas.map((data, index) => (
                        <Image
                            key={index}
                            src={data}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    ))}
                    {datas.map((data, index) => (
                        <Image
                            key={index}
                            src={data}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    ))}
                    {datas.map((data, index) => (
                        <Image
                            key={index}
                            src={data}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    ))}
                </div>
            </div>
            <Link href="https://forms.gle/JGMECekHC59HRwdT7" className="mt-2 underline w-full flex justify-center text-center text-[#FF7128]">এই দাবীর অংশীদার হতে সাথে যুক্ত হোন</Link>
        </div>
    );
};

export default Supporters;
