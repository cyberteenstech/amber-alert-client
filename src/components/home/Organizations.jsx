import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Organizations = () => {
    const logos = [
        '/cyberteens.png', // replace with your actual logo URLs
        '/amberalert.png',
        '/cyberteens.png', // replace with your actual logo URLs
        '/amberalert.png',
        '/cyberteens.png', // replace with your actual logo URLs
        '/amberalert.png',
    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[60px] md:py-[120px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                আমাদের আবেদন পৌঁছে যাবে{" "}
                <span className="text-[#FF7128]">যাদের কাছে</span>
            </h2>

            {/* Swiper for logos */}
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={50} // Space between slides
                slidesPerView={5} // Number of logos visible at once
                loop={true} // Infinite loop
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with interval
                navigation // Enable navigation buttons (optional)
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <Image width={100} height={100} src={logo} alt={`Logo ${index + 1}`} className="max-w-[100px] mx-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Organizations;