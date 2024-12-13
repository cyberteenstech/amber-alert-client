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

const ambassadors = [
  {
    id: 1,
    name: { en: "Faatiha Aayat", bn: "Faatiha Aayat" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image:
      "https://i.ibb.co.com/RHjMqRd/466841916-1591761551464254-549539917158943319-n.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    description: {
      en: "Faatiha is dedicated to empowering youth for a safer world.",
      bn: "ফাতিহা যুবকদের নিরাপদ বিশ্বের জন্য ক্ষমতায়ন করতে প্রতিশ্রুতিবদ্ধ।",
    },
  },
  {
    id: 2,
    name: { en: "Subha Safayet Shizda", bn: "Subha Safayet Shizda" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image:
      "https://i.ibb.co.com/sKd1hwZ/436373231-401947945934402-4601529120016278882-n.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    description: {
      en: "Subha leads initiatives to protect children from harm.",
      bn: "সুবহা শিশুদের ক্ষতির থেকে রক্ষা করার উদ্যোগ পরিচালনা করেন।",
    },
  },
  {
    id: 3,
    name: { en: "Afnan Ferdousi", bn: "Afnan Ferdousi" },
    title: { en: "Ambassador", bn: "Ambassador" },
    image:
      "https://i.ibb.co.com/fYZdYjm/400419849-350111167539354-6246448894793681613-n.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    description: {
      en: "Afnan focuses on advocacy for children's rights.",
      bn: "আফনান শিশু অধিকার প্রচারের উপর মনোযোগ দেন।",
    },
  },
];

const SocialIcon = ({ platform, url }) => {
  const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    website: Globe,
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

  const pageTitle =
    language === "bn" ? "আমাদের অ্যাম্বাসেডরগণ" : "Our Ambassadors";
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                    CEO &amp; Design Engineer
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
                    </DialogDescription>
                    <div className="flex justify-center gap-4 mt-4">
                      {Object.entries(ambassador.social).map(
                        ([platform, url]) => (
                          <SocialIcon
                            key={platform}
                            platform={platform}
                            url={url}
                          />
                        )
                      )}
                    </div>
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
