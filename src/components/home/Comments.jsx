"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { useLanguage } from "@/contexts/LanguageContext";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { language } = useLanguage();

    const getComments = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/comment`);
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
            <h2 className="md:text-[40px] text-[24px] font-bold text-[#072E75] text-center mb-[40px]">
                {language === "bn" ? "আপনাদের " : "Your "}
                <span className="text-[#FF7128]">{language === "bn" ? "মতামত" : "Opinions"}</span>
            </h2>
            <Swiper
                // slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Show 1 slide for mobile (<= 640px)
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2, // Show 2 slides for tablets (<= 768px)
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3, // Show 3 slides for desktops
                        spaceBetween: 40,
                    },
                }}

            >
                {comments.map((comment, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-[#f8f4e5] p-8 border-2 border-[#8b4513] rounded-lg shadow-xl md:h-[350px] h-[300px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 overflow-hidden">
                            <div className="absolute top-[-25px] right-[-25px] w-[80px] h-[80px] bg-[#FF7128] rounded-full text-white text-center text-4xl leading-[100px] font-bold shadow-md transform rotate-45">
                                📨
                            </div>
                            <div className="border-b-2 border-[#8b4513] pb-4 mb-4">
                                <blockquote className="text-[#3a2921] md:text-lg text-[16px] italic leading-relaxed font-serif">
                                    &quot;{comment.comment}&quot;
                                </blockquote>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="w-12 h-12 bg-[#FF7128] rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {comment.name.charAt(0)}
                                </div>
                                <p className="text-right text-sm font-semibold text-[#8b4513] font-serif">
                                    — {comment.name}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')]"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Comments;

