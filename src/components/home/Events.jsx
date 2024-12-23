"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
    const [expandedId, setExpandedId] = useState(null);
    const { language } = useLanguage();

    const datas = {
        bn: [
            {
                id: 1,
                title: "'এম্বার এলার্ট - বাংলাদেশ' এর যাত্রা",
                date: "২০ নভেম্বর, ২০২৪",
                description:
                    "'২০ নভেম্বর আন্তর্জাতিক শিশু দিবসে বাংলাদেশে 'এম্বার এলার্ট' এর আনুষ্ঠানিক যাত্রা শুরু হতে যাচ্ছে। শিশুদের নিরাপত্তায় যুগান্তকারী এই উদ্যোগে সরকার, আইনশৃঙ্খলা রক্ষাকারী বাহিনী, গণমাধ্যম, এবং সাধারণ জনগণকে একত্রিত করে কাজ করা হবে। আপনার অংশগ্রহণ একান্ত প্রয়োজন।'",
            },
            {
                id: 2,
                title: "লাইভ টক শো: বাংলাদেশে এম্বার এলার্টের প্রয়োজনীয়তা",
                date: "২৫ নভেম্বর, ২০২৪",
                description:
                    "'বাংলাদেশে শিশু নিখোঁজ প্রতিরোধে 'এম্বার এলার্ট' এর গুরুত্ব এবং প্রাসঙ্গিকতা নিয়ে বিশেষজ্ঞদের অংশগ্রহণে একটি লাইভ টক শো। আমাদের সঙ্গে যুক্ত হয়ে জেনে নিন কীভাবে এই উদ্যোগ একটি নিরাপদ ভবিষ্যত গড়তে ভূমিকা রাখবে।'",
            },
        ],
        en: [
            {
                id: 1,
                title: "'Amber Alert - Bangladesh' Launch",
                date: "November 20, 2024",
                description:
                    "'On November 20, International Children's Day, 'Amber Alert' will officially launch in Bangladesh. This revolutionary initiative will bring together the government, law enforcement, media, and the general public to work for the safety of children. Your participation is crucial.'",
            },
            {
                id: 2,
                title: "Live Talk Show: The Need for Amber Alert in Bangladesh",
                date: "November 25, 2024",
                description:
                    "'A live talk show with experts discussing the importance and relevance of 'Amber Alert' in preventing child disappearances in Bangladesh. Join us to learn how this initiative will contribute to building a safer future.'",
            },
        ],
    };

    return (
        <section className="relative bg-gradient-to-b from-[#FFE8D6] to-[rgb(255,248,252)] py-[40px] md:py-[80px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#072E75] text-center mb-16">
                    {language === "bn" ? "আমাদের আসন্ন" : "Upcoming"}{" "}
                    <span className="text-[#FF7128]">
                        {language === "bn" ? "ইভেন্ট" : "Events"}
                    </span>
                </h2>

                <div className="relative">
                    <div className="absolute left-1/2 transform md:-translate-x-1/2 translate-x-[-10rem] h-full w-1 bg-[#FF7128]"></div>

                    {datas[language].map((data) => (
                        <div
                            key={data.id}
                            className={`mb-16 ${data.id % 2 === 0
                                    ? "md:ml-auto md:pl-8"
                                    : "md:mr-auto md:pr-8"
                                } md:w-1/2 relative`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-white border-2 border-[#FF7128] rounded-full p-2 z-10">
                                    <div className="bg-[#FF7128] h-4 w-4 rounded-full"></div>
                                </div>
                                <div className="ml-4 bg-white border border-[#FF7128] rounded-lg py-2 px-4 text-[#072E75] font-semibold">
                                    {data.date}
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <h3 className="text-[#072E75] text-xl font-semibold mb-3">
                                    {data.title}
                                </h3>
                                <p className="text-[#072E75] text-sm mb-4">
                                    {expandedId === data.id
                                        ? data.description
                                        : `${data.description.slice(0, 100)}...`}
                                </p>
                                <button
                                    onClick={() =>
                                        setExpandedId(
                                            expandedId === data.id ? null : data.id
                                        )
                                    }
                                    className="bg-[#FF7128] text-white py-2 px-4 rounded-md text-sm hover:bg-[#e66323] transition"
                                >
                                    {expandedId === data.id
                                        ? language === "bn"
                                            ? "সংক্ষিপ্ত করুন"
                                            : "Collapse"
                                        : language === "bn"
                                            ? "বিস্তারিত"
                                            : "Read More"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
