"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { GrClose } from "react-icons/gr";
// import Lottie from "lottie-react";
import scrollArrowAnimation from "/public/scrolldown.json";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import TypingEffect from 'react-typing-effect';
import Link from 'next/link';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AlertBanner = ({ setIsOpen, isOpen }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-t to-[#f7f7f7] from-[#ffffff] shadow-lg h-screen flex items-center justify-center"
        >
          {/* Backgrounds */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url('/map.gif')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
              zIndex: -1,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('/noise.gif')]"
            style={{ opacity: 0.04 }}
          ></div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow hover:shadow-lg transition-all"
            onClick={() => setIsOpen(false)}
          >
            <GrClose size={20} />
          </button>

          {/* Main Content */}
          <main className="relative rounded-lg w-full h-auto max-w-[1440px] p-6 flex flex-col lg:flex-row items-center justify-center gap-8">
            <section className="flex-1 text-center lg:text-left flex flex-col md:justify-start justify-center md:items-start items-center md:ps-12">
              <div className="flex items-center gap-2 flex-col md:flex-row ">
                <Image src="/amberalert.png" alt="Logo" width={70} height={70} />
                <p className="text-[#FF7128] text-xl font-bold uppercase mb-2 sm:mb-0 tracking-wider">
                  #SaveMissingChildren
                </p>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-red-600 mb-4">
                ENOUGH IS ENOUGH!
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                {language == "bn" ? "আওয়াজ তুলুন" : "Stand For Change"}
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 md:mb-8 mb-4">
                {language == "bn"
                  ? "বাংলাদেশে শিশু নিখোঁজ রোধে যুক্ত হন আমাদের সাথে, পরিবর্তন আসবে আপনাদের থেকেই"
                  : "Join us in making a difference. Together, we can create a better future for children around the globe."}
              </p>
              <Link href="#banner" passHref>
                <button className="flex items-center gap-x-2 bg-[#FF7128] border-[#FF7128] border-[1.5px] text-[#fff] md:px-6 px-4 py-3 rounded-lg z-30">
                  <IoDocumentTextOutline className="md:text-xl text-lg" /> {language === "bn" ? "পিটিশন স্বাক্ষর করুন" : "Sign the petition"}
                </button></Link>
            </section>
            <section className="flex-1 lg:max-w-[60%] w-full rounded-lg overflow-hidden z-30">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=IVtDoVU0cCc&feature=youtu.be"
                controls
                width="100%"
                height="100%"
                style={{
                  aspectRatio: "16 / 9",
                }}
              />
            </section>
          </main>



          {/* Lottie Animation */}
          <div className="absolute bottom-[-40vh] left-1/2 transform -translate-x-1/2">
            <DotLottieReact
              src={scrollArrowAnimation}
              loop
              autoplay
            />
          </div>

          {/* Left Ribbon with Sliding Hashtags */}
          <div
            className="hidden lg:flex absolute top-0 left-0 md:w-16 w-10 h-full bg-[#FF7128] items-center justify-center z-30 overflow-hidden "
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-white text-sm font-bold tracking-wide leading-6 flex flex-col items-center">
                <TypingEffect
                  text={[
                    "E\nv\ne\nr\ny\n\nS\ne\nc\no\nn\nd\n\nM\na\nt\nt\ne\nr\ns\n\nW\nh\ne\nn\n\n"
                    + "A\n\nC\nh\ni\nl\nd\n\n"
                    + "G\no\ne\ns\n\nM\ni\ns\ns\ni\nn\ng",
                  ]}
                  speed={75} // Typing speed per character
                  eraseSpeed={50} // Erase speed per character
                  typingDelay={500} // Delay before typing starts
                  eraseDelay={3000} // Delay before erasing starts
                  displayTextRenderer={(text, i) => {
                    return (
                      <>
                        {text.split("\n").map((char, index) => (
                          <span
                            key={index}
                            className={`${char === "" ? "mb-2" : "block"}`}
                            style={{ marginBottom: char === "" ? "8px" : "-5px" }}
                          >
                            {char || "\u00A0"}
                          </span>
                        ))}
                      </>
                    );
                  }}
                />
              </div>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBanner;
