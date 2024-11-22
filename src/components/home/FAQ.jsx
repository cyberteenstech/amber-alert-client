"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios'

// Define the structure of FAQ data
const FAQ = () => {
    const [faqs, setFaqs] = useState([]);

    // Fetch voter data
    const getFaqsData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/faq`);
            console.log(res);
            setFaqs(res.data.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getFaqsData();
    }, [])
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[80px]">
            
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                জিজ্ঞাসিত{" "}
                <span className="text-[#FF7128]">প্রশ্ন </span>
            </h2>
            <div className="space-y-4">
                {faqs.length > 0 && faqs.map((faq, index) => (
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