"use client";

import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

const Letter = () => {
    const language = localStorage.getItem("language");
    return (
        <div id="letter-section" className="relative">
            {/* Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white">
                <div className="absolute top-[2%] left-[0%] h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF7128] to-[#FFD6BA] opacity-30 blur-[100px]"></div>
                <div className="absolute top-[60%] left-[80%] md:h-[300px] h-[100px] md:w-[400px] w-[150px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF7128] to-[#FFD6BA] opacity-30 blur-[100px]"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-[1000px] w-full mx-auto px-4 md:px-10 md:my-[60px] my-[40px]">
                {/* Header */}
                <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center">
                    Amber Alert{" "}
                    <span className="text-[#FF7128] md:mb-[85px] mb-[24px]">
                        {language === "bn" ? "বাস্তবায়নের জন্য আহ্বান" : "Letter of Faith"}
                    </span>
                </h2>

                {/* Letter Body */}
                <div className="p-4 md:p-10 relative mt-8 rounded-xl bg-transparent">
                    {/* Container with Red and Blue Dashed Border with 1px Gap */}
                    <div
                        className="rounded-lg p-[.5px] md:p-[.5px] bg-transparent"
                        style={{
                            border: "8px solid transparent",
                            borderRadius: "5px",
                            backgroundImage:
                                "linear-gradient(white, white), repeating-linear-gradient(45deg, #FF0000 0 9px, transparent 9px 10px, #0000FF 10px 19px, transparent 19px 20px)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "content-box, border-box",
                        }}
                    >
                        {language === "bn" ? (                           
                        
                        <div className="bg-transparent md:py-[48px] md:px-[44px] p-[20px]">
                            {/* Content */}
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                সম্মানিত নীতি-নির্ধারক,
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                আমরা, বাংলাদেশের জনগণ, শিশুদের নিরাপত্তা নিশ্চিত করার জন্য একটি জরুরি এবং কার্যকর পদক্ষেপ
                                হিসাবে <span className="font-semibold">Amber Alert</span> বাস্তবায়নের জন্য আপনার কাছে আহ্বান জানাচ্ছি।
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                প্রতিবছর আমাদের দেশে হাজার হাজার শিশু নিখোঁজ হয়। তাদের অনেকেই পাচার, নির্যাতন, বা আরও গুরুতর বিপদের শিকার হয়। একটি শিশু নিখোঁজ হওয়ার পর প্রথম কয়েক ঘণ্টা অত্যন্ত গুরুত্বপূর্ণ, কারণ দ্রুত পদক্ষেপ নেওয়া গেলে অনেক শিশুকে উদ্ধার করা সম্ভব। দুর্ভাগ্যবশত, আমাদের দেশে এমন একটি সিস্টেমের অভাব রয়েছে যা নিখোঁজ শিশুদের দ্রুত খুঁজে পেতে সাহায্য করতে পারে।
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                Amber Alert কী?
                            </p>

                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                অ্যাম্বার এলার্ট হলো একটি জরুরি সতর্কতা ব্যবস্থা, যা নিখোঁজ শিশুদের দ্রুত খুঁজে বের করার জন্য সরকার, আইনশৃঙ্খলা রক্ষাকারী বাহিনী, গণমাধ্যম, এবং সাধারণ জনগণকে একত্রিত করে কাজ করে।
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                আমেরিকা ও বিশ্বের অন্যান্য দেশে এই সিস্টেমের মাধ্যমে হাজারো শিশুর জীবন রক্ষা করা সম্ভব হয়েছে। বাংলাদেশেও এটি বাস্তবায়ন করা অত্যন্ত জরুরি।
                            </p>

                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                আমাদের দাবি:
                            </p>
                            <ol className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                <li>১. বাংলাদেশে Amber Alert ব্যবস্থা চালু করা।  </li>
                                <li>২. শিশু নিখোঁজের জন্য একটি কেন্দ্রীয় তথ্যভাণ্ডার তৈরি করা। </li>
                                <li>৩. আইনশৃঙ্খলা রক্ষাকারী বাহিনী, গণমাধ্যম, এবং প্রযুক্তিগত অংশীদারদের নিয়ে একটি সমন্বিত প্ল্যাটফর্ম তৈরি করা।  </li>
                                <li>৪. নিখোঁজ শিশুদের সন্ধানে জনগণকে সক্রিয়ভাবে যুক্ত করার জন্য একটি ডিজিটাল নেটওয়ার্ক তৈরি করা।  </li>
                            </ol>

                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                আপনার সমর্থন কেন গুরুত্বপূর্ণ?
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                প্রতিটি শিশুর জীবন মূল্যবান। Amber Alert ব্যবস্থা চালু হলে নিখোঁজ শিশুদের দ্রুত উদ্ধার করা সম্ভব হবে। এটি শুধু একটি প্রযুক্তিগত পদক্ষেপ নয়, বরং একটি মানবিক উদ্যোগ, যা আমাদের ভবিষ্যৎ প্রজন্মকে সুরক্ষিত রাখবে।  
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                              আমরা বিশ্বাস করি, আপনার সমর্থন ও পদক্ষেপ এই উদ্যোগ বাস্তবায়নে সহায়ক হবে। আপনার সঙ্গে মিলে আমরা একটি নিরাপদ ও সুন্দর বাংলাদেশ গড়ে তুলতে চাই, যেখানে প্রতিটি শিশু নিরাপদ থাকবে।
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                নিবেদিত
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                               সাইবার টিনস ফাউন্ডেশন
                            </p>
                            <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                আপনার একটি স্বাক্ষর একটি শিশুর জীবন রক্ষা করতে পারে।
                                #AmberAlertBD #ProtectOurChildren #Amberalert4bangladesh
                            </p>
                            {/* Button */}
                            {/* <div className="mt-6 text-start">
                                <button className="bg-[#FF7128] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-[#e66323] transition flex items-center gap-x-2">
                                    <FaHandHoldingHeart />
                                    সাক্ষর করুণ
                                </button>
                            </div> */}
                        </div>
                        ) : (
                                <div className="bg-transparent md:py-[48px] md:px-[44px] p-[20px]">
                                    {/* Content */}
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                        Dear Policy Makers,
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        We, the people of Bangladesh, request your support to introduce the <span className="font-semibold">Amber Alert</span> system to protect our children and ensure their safety.
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        Every year, thousands of children go missing in Bangladesh. Many face trafficking, abuse, or worse. The first few hours after a child goes missing are critical, as quick action can save lives. However, our country lacks a system to locate and rescue missing children quickly.
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                        What is Amber Alert?
                                    </p>

                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        Amber Alert is an emergency system that helps find missing children by working with the government, police, media, and the public. This system has saved thousands of lives in other countries, and we believe it is urgently needed in Bangladesh.
                                    </p>

                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                        Our Demands:
                                    </p>
                                    <ol className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        <li>1. Start the Amber Alert system in Bangladesh.</li>
                                        <li>2. Create a central database for missing children.</li>
                                        <li>3. Build a platform to connect police, media, and technology for quick action.</li>
                                        <li>4. Engage the public through a digital network to search for missing children.</li>
                                    </ol>

                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                        Why is Your Support Important?
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        Every child&quot;s life is valuable. Amber Alert can save lives and create a safer future for our children. Your leadership can make this system a reality and ensure no child is left behind.

                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        Let us work together to create a safe and secure Bangladesh for every child.
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4 font-medium">
                                        Sincerely,
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        Cyber Teens Foundation
                                    </p>
                                    <p className="text-[#072E75] text-base md:text-lg text-[12px] mb-4">
                                        Your signature can save a child&quot;s life.
                                        #AmberAlertBD #ProtectOurChildren #Amberalert4bangladesh
                                    </p>
                                </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Letter;
