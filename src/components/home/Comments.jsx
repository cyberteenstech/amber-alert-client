"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// import { Pagination } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { language } = useLanguage();

    const getComments = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/comment`);
            console.log(res)
            setComments(res.data.data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[80px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                {language === "bn" ? "আপনাদের " : "Your "}
                <span className="text-[#FF7128]">{language === "bn" ? "মতামত" : "Opinions"}</span>
            </h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // modules={[Pagination]}
                autoplay={{
                    delay: 2000, // 3 seconds delay
                    disableOnInteraction: false, // Keeps autoplay active after user interaction
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {comments.map((comment, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-6 border rounded-lg shadow-md bg-white h-[300px] flex flex-col  justify-around">
                            <blockquote className="text-center text-gray-700 text-[18px] font-medium italic">
                                “{comment.comment}”
                            </blockquote>
                            <p className="text-right text-sm font-semibold text-[#FF7128] mt-4">
                                — {comment.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Comments;
