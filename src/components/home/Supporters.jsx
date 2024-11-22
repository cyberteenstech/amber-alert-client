import React from 'react';

const Supporters = () => {
    const datas = [
        "বিজ্ঞানপ্রিয়",
        "এনসিটিএফ",
        "সেইভ দ্যা চিলড্রেন"
    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[60px] overflow-hidden">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                আমাদের{" "}
                <span className="text-[#FF7128]">সাপোর্টে</span>
            </h2>
            <div className="relative">
                <div className="whitespace-nowrap animate-marquee text-2xl font-semibold text-[#072E75]">
                    {datas.map((data, index) => (
                        <span key={index} className="mx-8 text-xl text-[#072E75]">{data}</span>
                    ))}
                    {/* Repeat the content for smooth scrolling */}
                    {datas.map((data, index) => (
                        <span key={`repeat-${index}`} className="mx-8 text-xl text-[#072E75]">{data}</span>
                    ))}
                    {datas.map((data, index) => (
                        <span key={`repeatt-${index}`} className="mx-8 text-xl text-[#072E75]">{data}</span>
                    ))}
                    {datas.map((data, index) => (
                        <span key={`repeattt-${index}`} className="mx-8 text-xl text-[#072E75]">{data}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Supporters;
