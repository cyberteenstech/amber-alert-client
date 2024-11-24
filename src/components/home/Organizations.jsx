"use client";
import Image from 'next/image';
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const Organizations = () => {
    const { language, changeLanguage } = useLanguage();
    const data = [
        'স্বরাষ্ট্র মন্ত্রণালয়', // replace with your actual logo URLs
        'বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন',
        'মহিলা ও শিশু বিষয়ক মন্ত্রণালয়', // replace with your actual logo URLs
        'সমাজকল্যাণ মন্ত্রণালয়',
        'জাতীয় মানবাধিকার কমিশন', // replace with your actual logo URLs
        'ইউনিসেফ বাংলাদেশ',
        'ডাক টেলিযোগাযোগ ও তথ্যপ্রযুক্তি মন্ত্রণালয়',
        'আইন বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[80px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
              {language === "bn" ? "আমাদের আবেদন পৌঁছে যাবে" : "Our appeal will"}  {" "}
                <span className="text-[#FF7128]">{language === "bn" ? "যাদের কাছে" : "reach those who matter"}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        <h3 className="text-blue-900 text-lg font-semibold mb-2">
                            {item}
                        </h3>
                        <div className="w-16 h-1 bg-orange-500 rounded"></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Organizations;