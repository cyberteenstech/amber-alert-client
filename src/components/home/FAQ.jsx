"use client";
import React, { useState } from 'react';

// Define the structure of FAQ data
const FAQ = () => {
    const faqs = [
        { question: "Amber Alert কী?", answer: "প্রতিবছর আমাদের দেশে হাজার হাজার শিশু নিখোঁজ হয়। তাদের অনেকেই পাচার, নির্যাতন, বা আরও গুরুতর বিপদের শিকার হয়। একটি শিশু নিখোঁজ হওয়ার পর প্রথম কয়েক ঘণ্টা অত্যন্ত গুরুত্বপূর্ণ, কারণ দ্রুত পদক্ষেপ নেওয়া গেলে অনেক শিশুকে উদ্ধার করা সম্ভব। দুর্ভাগ্যবশত, আমাদের দেশে এমন একটি সিস্টেমের অভাব রয়েছে যা নিখোঁজ শিশুদের দ্রুত খুঁজে পেতে সাহায্য করতে পারে।" },
        { question: "আমরা কারা? ", answer: "আমেরিকা ও বিশ্বের অন্যান্য দেশে এই সিস্টেমের মাধ্যমে হাজারো শিশুর জীবন রক্ষা করা সম্ভব হয়েছে। বাংলাদেশেও এটি বাস্তবায়ন করা অত্যন্ত জরুরি।" },
        { question: "আপনার সমর্থন কেন গুরুত্বপূর্ণ?", answer: "প্রতিটি শিশুর জীবন মূল্যবান। Amber Alert ব্যবস্থা চালু হলে নিখোঁজ শিশুদের দ্রুত উদ্ধার করা সম্ভব হবে। এটি শুধু একটি প্রযুক্তিগত পদক্ষেপ নয়, বরং একটি মানবিক উদ্যোগ, যা আমাদের ভবিষ্যৎ প্রজন্মকে সুরক্ষিত রাখবে।" },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[60px] md:py-[120px]">
            
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                জিজ্ঞাসিত{" "}
                <span className="text-[#FF7128]">প্রশ্ন </span>
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[#E5E7EB] pb-4 bg-[#FCEFEE] rounded-lg px-4 py-2">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left flex justify-between items-center text-lg font-semibold text-[#1F2937] focus:outline-none"
                        >
                            {faq.question}
                            <span className="text-[#FF7128] text-xl">
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="mt-2 text-sm text-[#6B7280]">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;