import Image from 'next/image';
import React from 'react';

const Supporters = () => {
    const datas = [
        "https://i.ibb.co.com/f8mp9vV/image.png",
        "https://i.ibb.co.com/VwwQwbM/images.png"
    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[60px] overflow-hidden">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                আমাদের{" "}
                <span className="text-[#FF7128]">সাপোর্টে</span>
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
        </div>
    );
};

export default Supporters;
