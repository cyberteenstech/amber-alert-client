"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
    const [isPaused, setIsPaused] = useState(true);

    const handlePlayPause = () => {
        setIsPaused(false);
    };

    return (
        <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white">
                <div className="absolute top-[2%] left-[0%] h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF7128] to-[#FFD6BA] opacity-30 blur-[100px]"></div>
                <div className="absolute top-[60%] left-[80%] md:h-[300px] h-[100px] md:w-[400px] w-[150px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF7128] to-[#FFD6BA] opacity-30 blur-[100px]"></div>
            </div>
            {/* Content */}
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 md:my-[120px] my-[60px]">
                <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center">
                    সরকারের <span className="text-[#FF7128] md:mb-[85px] mb-[24px]"> প্রতি বার্তা</span>
                </h2>

                {/* Video Section */}
                <div className="relative w-full max-w-[1000px] mx-auto mt-10">
                    {/* React Player */}
                    <div className="relative w-full h-0 pb-[56.25%] rounded-xl shadow-lg overflow-hidden">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=sXEKFSaxGzE&ab_channel=AfnanFerdousi"
                            playing={!isPaused}
                            controls
                            width="100%"
                            height="100%"
                            className="absolute top-0 left-0"
                            onPause={() => setIsPaused(true)}
                            onPlay={() => setIsPaused(false)}
                        />

                        {/* Poster */}
                        {isPaused && (
                            <div
                                className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer"
                                style={{
                                    backgroundImage: `url('/banner.jpg')`, // Replace with your poster image path
                                }}
                                onClick={handlePlayPause}
                            >
                                <button
                                    className="flex items-center justify-center rounded-full bg-red-500 text-white w-16 h-16 shadow-lg hover:scale-105 active:scale-95"
                                    style={{
                                        animation: "ripple 1.5s infinite",
                                    }}
                                >
                                    ▶
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Ripple Effect */}
            <style>
                {`
                @keyframes ripple {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5);
                    }
                    100% {
                        box-shadow: 0 0 0 20px rgba(255, 0, 0, 0);
                    }
                }
                `}
            </style>
        </div>
    );
};

export default VideoSection;
