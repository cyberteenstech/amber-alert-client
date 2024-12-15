"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { MoveUpRight, Plus } from "lucide-react";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "../ambassador/modal";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { ambassadorsData } from "../../../public/ambassadors.data";


const SocialIcon = ({ platform, url }) => {
  const icons = {
    facebook: Facebook,
  };
  const Icon = icons[platform];

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-[#FF7128] transition-colors"
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
};

export default function Ambassadors() {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(true);

  const [ambassadors, setAmbassadors] = useState([]);

  const handlePlayPause = () => {
    setIsPaused(false);
  };
  const pageTitle =
    language === "bn"
      ? "১০০ শিশু সুরক্ষাদূত"
      : "100 Child protection ambassadors";
  const pageSubtitle =
    language === "bn"
      ? "এই মহৎ ব্যক্তিরা বাংলাদেশের শিশুদের নিরাপত্তার জন্য কাজ করছেন"
      : "These distinguished individuals are working to keep Bangladesh's children safe";

       useEffect(() => {
    // Shuffle the ambassadors array
    const shuffled = [...ambassadorsData].sort(() => Math.random() - 0.5);
    setAmbassadors(shuffled);
  }, []);
  return (
    <div className="bg-gradient-to-b from-red-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#072E75] mb-4">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-600">{pageSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
          {ambassadors.map((ambassador) => (
            <Dialog
              key={ambassador.id}
              transition={{
                type: "spring",
                bounce: 0.05,
                duration: 0.5,
              }}
            >
              <DialogTrigger className="relative mt-4 h-[430px] group mx-auto bg-white border rounded-md text-black flex flex-col cursor-pointer w-full mx-auto items-center max-w-[350px]">
                <div className="w-full relative rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
                  <Image
                    src={ambassador.image}
                    alt={ambassador.name[language]}
                    width={600}
                    height={600}
                    className="h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
                  />
                  <div className="absolute bottom-2 right-2">
                    <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#363742] group-hover:bg-[#080918]  font-medium text-neutral-200 border-2 transition-all duration-300 group-hover:w-24">
                      <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                        Visit
                      </div>
                      <div className="absolute right-3">
                        <MoveUpRight />
                      </div>
                    </button>
                  </div>
                </div>
                <article className="relative overflow-hidden flex-grow">
                  <div className="info px-4 py-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
                    <p className="md:text-2xl font-semibold text-[#072E75]">
                      {ambassador.name[language]}
                    </p>
                    <p className="sm:text-base text-sm">
                      {ambassador.title[language]}
                    </p>
                  </div>
                  <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center text-[#072E75]">
                    {ambassador.title[language]}
                  </button>
                </article>
              </DialogTrigger>
              <DialogContainer className="py-10">
                <DialogContent
                  className="relative flex h-full mx-auto flex-col overflow-y-auto border  bg-gray-100  lg:w-[900px] w-[80%]"
                  style={{ borderRadius: "24px" }}
                >
                  <DialogImage
                    src={ambassador.image}
                    alt={ambassador.name[language]}
                    className=" object-contain md:w-[60%] w-[90%] mx-auto rounded-lg my-12"
                  />
                  <div className="p-6">
                    <DialogTitle className="text-xl lg:text-5xl text-[#FF7128] ">
                      {ambassador.name[language]}
                    </DialogTitle>
                    <DialogDescription>
                      <p className="mt-2 text-zinc-500 ">
                        {ambassador.description[language]}
                      </p>
                      {/* <div className="flex justify-center gap-4 mt-4">
                        {Object.entries(ambassador.social).map(
                          ([platform, url]) => (
                            <SocialIcon
                              key={platform}
                              platform={platform}
                              url={url}
                            />
                          )
                        )}
                      </div> */}
                      <blockquote className="relative text-center max-w-lg mx-auto my-10">
                        <div className="relative z-10">
                          <p className="text-xl text-gray-800">
                            <em className="relative">
                              <svg
                                className="absolute -top-8 -start-8 size-16 text-gray-900 opacity-30 sm:h-24 sm:w-24"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="relative z-10">
                                {ambassador.quote[language]}
                              </span>
                            </em>
                          </p>
                        </div>
                      </blockquote>
                      <div className="md:w-[40vw] mx-auto">
                        <div className="relative w-full h-0 pb-[56.25%] rounded-xl shadow-lg overflow-hidden">
                          <ReactPlayer
                            url="https://youtu.be/ONEBdKjN-2Q"
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
                                backgroundImage: `url('/thumb.jpg')`, // Replace with your poster image path
                              }}
                              onClick={handlePlayPause}
                            >
                              <button
                                className="flex items-center justify-center rounded-full bg-red-500 text-white md:w-16 md:h-16 w-12
                                 h-12 shadow-lg hover:scale-105 active:scale-95"
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
                    </DialogDescription>
                  </div>
                  <DialogClose className="text-zinc-50 -900 bg-gray-400 p-4 hover:bg-gray-500 rounded-full -gray-800" />
                </DialogContent>
              </DialogContainer>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
