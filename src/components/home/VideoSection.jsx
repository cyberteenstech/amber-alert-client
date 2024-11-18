"use client";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoSection = () => {
    const [isPaused, setIsPaused] = useState(true);

    const handlePlayPause = () => {
        setIsPaused(false);
    };

    return (
        <div>
            {/* Background */}
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full"
                style={{
                    background: `
                        radial-gradient(circle at top left, rgba(249, 216, 212, 0.6), transparent 70%),
                        radial-gradient(circle at bottom right, rgba(248, 242, 255, 0.6), transparent 70%)
                    `,
                    backgroundColor: 'white',
                }}
            ></div>

            {/* Content */}
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 md:my-[120px] my-[60px]">
                <h2 className="md:text-[40px] text-[20px] font-semibold text-[#072E75] text-center">
                    সরকারের <span className="text-[#FF7128] md:mb-[85px] mb-[24px]"> প্রতি বার্তা</span>
                </h2>

                {/* Video Section */}
                <div className="relative w-full max-w-[1440px] mx-auto mt-10">
                    {/* React Player */}
                    <div className="relative w-full h-0 pb-[56.25%] rounded-xl shadow-lg overflow-hidden">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hxD0R50cUIo"
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
                                        animation: 'ripple 1.5s infinite',
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
