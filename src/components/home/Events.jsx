"use client";

import React from "react";

const Events = () => {
    return (
        <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-[#FFE8D6] to-[rgb(255,248,252)]"></div>

            {/* Content Container */}
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[60px] md:py-[120px]">
                {/* Header */}
                <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                    আমাদের আসন্ন{" "}
                    <span className="text-[#FF7128]">ইভেন্ট</span>
                </h2>

                {/* Timeline */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {[...Array(4)].map((_, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center relative gap-6"
                        >
                            {/* Date Box */}
                            <div className="bg-white border border-dashed border-[#FF7128] rounded-lg py-4 px-6 text-center text-[#072E75] font-semibold">
                                ২৫ <br />
                                <span className="font-normal">নভেম্বর</span>

                                <div className="absolute top-[28%] left-[50%] -translate-x-1/2 w-[2px] h-[28px] bg-[#FF7128]"></div>

                                {/* Ripple Effect */}
                                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 mt-[50px]">
                                    <div className="relative h-3 w-3">
                                        {/* Red Dot with Ripple Effect */}
                                        <div className="absolute inset-0 h-3 w-3 bg-[#FF0000] rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 h-4 w-4 bg-[#FF0000] rounded-full opacity-30 animate-ping"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="md:block hidden">
                                {idx !== 3 && (
                                    <div className="absolute flex items-center justify-center top-[14%] left-[69%]">
                                        <div className="flex items-center">
                                            {/* Dot */}
                                            <div className="h-3 w-3 rounded-full bg-[#FF7128]"></div>
                                            {/* Dotted Line */}
                                            <div className="w-[200px] h-0 border-dashed border-t-2 border-[#FF7128] mx-1"></div>
                                            {/* Dot */}
                                            <div className="h-3 w-3 rounded-full bg-[#FF7128]"></div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            {/* Event Box */}
                            <div className="bg-white rounded-lg p-6 w-full">
                                <h3 className="text-[#072E75] text-lg font-semibold mb-2">
                                    গোলটেবিল বৈঠক
                                </h3>
                                <p className="text-[#072E75] text-sm mb-4">
                                    শিশুদের নিরাপত্তার গুরুত্ব নিয়ে আলোচনা করবে।
                                </p>
                                {/* Buttons */}
                                <div className="flex gap-2">
                                    <button className="bg-[#FF7128] text-white py-2 px-4 rounded-md text-sm hover:bg-[#e66323] transition">
                                        বিস্তারিত
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
