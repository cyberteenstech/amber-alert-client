"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    en: {
        title: "Our Mission",
        goals: [
            "Implement the Amber Alert system in Bangladesh.",
            "Create a central database for missing children.",
            "Raise awareness and activate the public.",
            "Coordinate with the government and relevant agencies.",
            "Implement the Amber Alert system in Bangladesh."
        ]
    },
    bn: {
        title: "আমাদের লক্ষ্য",
        goals: [
            "বাংলাদেশে Amber Alert ব্যবস্থা বাস্তবায়ন করা।",
            "শিশু নিখোঁজের জন্য একটি কেন্দ্রীয় তথ্যভাণ্ডার তৈরি করা।",
            "সচেতনতা বৃদ্ধি এবং জনগণকে সক্রিয় করা।",
            "সরকার এবং সংশ্লিষ্ট সংস্থার সঙ্গে সমন্বয় করা।",
            "বাংলাদেশে Amber Alert ব্যবস্থা বাস্তবায়ন করা।"
        ]
    }
};

const Goal = () => {
    const { language } = useLanguage();
    const { title, goals } = translations[language] || translations.en;

    return (
        <div className="relative">
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full bg-white"
                style={{
                    background: 'linear-gradient(to top, rgba(249, 216, 212, .4) 30%, rgba(248,242,255,0.05) 70%)'
                }}
            ></div>

            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 my-4">
                <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center">
                    {language === 'bn' ? 'আমাদের' : 'Our'} <span className="text-[#FF7128] md:mb-[85px] mb-[24px]">{language === 'bn' ? 'লক্ষ' : 'Mission'}</span>
                </h2>

                {goals.map((goal, index) => (
                    <div key={index} className="bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4">
                        <h2 className={`md:text-[30px] text-[20px] ${index % 2 === 0 ? "text-[#FF7128]" : "text-[#072E75]"} mb-2`}>
                            {index + 1}. {goal}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Goal;
