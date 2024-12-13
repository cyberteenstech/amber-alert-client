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
import { useState } from "react";

const ambassadors = [
  {
    id: 1,
    name: { en: "Faatiha Aayat", bn: "Faatiha Aayat" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image:
      "https://i.ibb.co.com/RHjMqRd/466841916-1591761551464254-549539917158943319-n.jpg",
    social: {
      facebook: "https://www.facebook.com/FaatihaAayatOfficial?mibextid=ZbWKwL",
    },
    description: {
      en: "Fatiha Ayat is a children's writer, poet and human rights activist. He has represented Bangladesh in United Nations and various international conferences. Apart from working on child education and rights, he is vocal on climate change and child protection.",
      bn: "ফাতিহা আয়াত একজন শিশু লেখক, কবি এবং মানবাধিকার কর্মী। তিনি জাতিসংঘ এবং বিভিন্ন আন্তর্জাতিক সম্মেলনে বাংলাদেশকে প্রতিনিধিত্ব করেছেন। শিশুশিক্ষা ও অধিকার নিয়ে কাজ করার পাশাপাশি তিনি জলবায়ু পরিবর্তন ও শিশু সুরক্ষা নিয়ে সোচ্চার।",
    },
    quote: {
      en: "Ensuring the safety of children is safeguarding our future. Amber Alert will play a remarkable role in this mission",
      bn: "আমাদের শিশুদের সুরক্ষা নিশ্চিত করা মানেই আমাদের ভবিষ্যৎ রক্ষা করা। অ্যাম্বার অ্যালার্ট এই কাজে অসাধারণ ভূমিকা রাখবে।",
    },
  },
  {
    id: 2,
    name: { en: "Subha Safayet Shizda", bn: "Subha Safayet Shizda" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image:
      "https://i.ibb.co.com/sKd1hwZ/436373231-401947945934402-4601529120016278882-n.jpg",
    social: {
      facebook: " https://www.facebook.com/shizdaofficial?mibextid=ZbWKwL",
    },
    description: {
      en: "Shubha Safatiyat Shizdah is a young actress and social activist. She works on improving children's mental health and education. His interest in creating a safe environment for children has always been commendable.",
      bn: "শুভা সাফাতিয়াত শিজদাহ একজন তরুণ অভিনেত্রী এবং সামাজিক কর্মী। তিনি শিশুদের মানসিক স্বাস্থ্যের উন্নতি এবং শিক্ষা নিয়ে কাজ করেন। শিশুদের জন্য নিরাপদ পরিবেশ তৈরিতে তার আগ্রহ বরাবরই প্রশংসনীয়।",
    },
    quote: {
      en: "Amber Alert is a bold step toward every child's right to safety.",
      bn: "অ্যাম্বার অ্যালার্ট প্রতিটি শিশুর অধিকার ও নিরাপত্তার জন্য একটি সাহসী পদক্ষেপ।",
    },
  },
  {
    id: 3,
    name: { en: "Afnan Ferdousi", bn: "Afnan Ferdousi" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image:
      "https://i.ibb.co.com/fYZdYjm/400419849-350111167539354-6246448894793681613-n.jpg",
    social: {
      facebook: "https://www.facebook.com/afnanferdousi2006",
    },
    description: {
      en: "Afnan Ferdowsi is an accomplished software developer and project manager. He has proven his talent in programming and technology at a very young age. Despite being in the process of migrating from Bangladesh to Canada, he is committed to working for the welfare of the country. His role in the technical development of the Amber Alert project was immense.",
      bn: "আফনান ফেরদৌসি একজন দক্ষ সফটওয়্যার ডেভেলপার এবং প্রকল্প ব্যবস্থাপক। তিনি অত্যন্ত কম বয়সে প্রোগ্রামিং এবং টেকনোলজিতে নিজের প্রতিভা প্রমাণ করেছেন। বাংলাদেশ থেকে কানাডায় স্থানান্তরের পথে থাকা সত্ত্বেও, তিনি দেশের কল্যাণে কাজ করতে প্রতিশ্রুতিবদ্ধ। অ্যাম্বার অ্যালার্ট প্রকল্পের প্রযুক্তিগত উন্নয়নে তার ভূমিকা অপরিসীম।",
    },
    quote: {
      en: "By combining technology and humanity, we can build a safer future for children. Amber Alert is a crucial step toward that goal.",
      bn: "প্রযুক্তি এবং মানবতার মেলবন্ধনেই আমরা শিশুদের জন্য একটি নিরাপদ ভবিষ্যৎ গড়ে তুলতে পারি। অ্যাম্বার অ্যালার্ট সেই লক্ষ্য অর্জনের একটি গুরুত্বপূর্ণ পদক্ষেপ।",
    },
  },
  {
    id: 3,
    name: { en: "Simrin Lubaba", bn: "Simrin Lubaba" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image: "https://i.ibb.co.com/hYynV9W/image.png",
    social: {
      facebook: "https://www.facebook.com/simrin.lubaba.75?mibextid=ZbWKwL",
    },
    description: {
      en: "Simrin Lubaba is a talented child model and actress. With her sweet smile and achievements, she is playing a pioneering role in spreading positive messages for children. He is deeply committed to protecting children and ensuring their rights.",
      bn: "সিমরিন লুবাবা একজন প্রতিভাবান শিশু মডেল ও অভিনেত্রী। তার মিষ্টি হাসি এবং কৃতিত্বের মাধ্যমে তিনি শিশুদের জন্য ইতিবাচক বার্তা ছড়িয়ে দিতে অগ্রগামী ভূমিকা পালন করছেন। শিশুদের সুরক্ষা এবং তাদের অধিকার নিশ্চিত করার প্রতি তিনি গভীরভাবে প্রতিশ্রুতিবদ্ধ।",
    },
    quote: {
      en: "Every child deserves to grow up safely. Amber Alert is a beacon of hope to ensure that safety",
      bn: "প্রতিটি শিশু নিরাপদে বড় হওয়ার অধিকার রাখে। অ্যাম্বার অ্যালার্ট শিশুদের সেই নিরাপত্তা নিশ্চিত করার জন্য একটি আশার আলো।",
    },
  },
];

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
              <DialogTrigger className="relative mt-4 h-[430px] group mx-auto bg-white border rounded-md text-black flex flex-col cursor-pointer">
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
                  <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
                    <p className="md:text-2xl font-semibold">
                      {ambassador.name[language]}
                    </p>
                    <p className="sm:text-base text-sm">
                      {ambassador.title[language]}
                    </p>
                  </div>
                  <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center">
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
                    className=" object-contain w-[60%] mx-auto rounded-lg my-12"
                  />
                  <div className="p-6">
                    <DialogTitle className="text-xl lg:text-5xl text-zinc-950 ">
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
                      <div className="w-[40vw] mx-auto">
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
