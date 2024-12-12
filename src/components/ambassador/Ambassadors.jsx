"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";


const ambassadors = [
  {
    id: 1,
    name: {
      en: "Faatiha Aayat",
      bn: "Faatiha Aayat",
    },
    title: {
      en: "Ambassador",
      bn: "Ambassador",
    },
    image: "https://i.ibb.co.com/RHjMqRd/466841916-1591761551464254-549539917158943319-n.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 2,
    name: {
      en: "Sadat Rahman",
      bn: "Sadat Rahman",
    },
    title: {
      en: "Ambassador",
      bn: "Ambassador",
    },
    image: "https://i.ibb.co.com/r72Fn49/345060171-770992654745538-8129202476968391021-n.jpg",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    id: 3,
    name: {
      en: "Subha Safayet Shizda",
      bn: "Subha Safayet Shizda",
    },
    title: {
      en: "Ambassador",
      bn: "Ambassador",
    },
    image: "https://i.ibb.co.com/sKd1hwZ/436373231-401947945934402-4601529120016278882-n.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 4,
    name: {
      en: "Afnan Ferdousi",
      bn: "Afnan Ferdousi",
    },
    title: {
      en: "Ambassador",
      bn: "Ambassador",
    },
    image: "https://i.ibb.co.com/fYZdYjm/400419849-350111167539354-6246448894793681613-n.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
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
      <Icon className="w-5 h-5" />
    </Link>
  );
};

export default function Ambassadors() {
  const { language } = useLanguage();

  const pageTitle = language === "bn" ? "আমাদের অ্যাম্বাসেডরগণ" : "Our Ambassadors";
  const pageSubtitle =
    language === "bn"
      ? "এই মহৎ ব্যক্তিরা বাংলাদেশের শিশুদের নিরাপত্তার জন্য কাজ করছেন"
      : "These distinguished individuals are working to keep Bangladesh's children safe";

  return (
    <div className="bg-gradient-to-b from-red-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#072E75] mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-600">{pageSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambassadors.map((ambassador) => (
            <Card
              key={ambassador.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={ambassador.image}
                  alt={ambassador.name[language]}
                  fill
                  className="object-cover rounded-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {ambassador.name[language]}
                </h3>
                <p className="text-[#FF7128] mb-4">{ambassador.title[language]}</p>
                <div className="flex gap-4">
                  {Object.entries(ambassador.social).map(([platform, url]) => (
                    <SocialIcon key={platform} platform={platform} url={url} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#072E75] mb-4">
            {language === "bn"
              ? "অ্যাম্বাসেডর হতে চান?"
              : "Want to Become an Ambassador?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === "bn"
              ? "আমাদের সাথে যোগ দিন এবং শিশুদের নিরাপত্তায় সহায়তা করুন"
              : "Join us in our mission to help keep children safe"}
          </p>
          <button className="bg-[#FF7128] text-white font-bold py-3 px-8 rounded-full hover:bg-[#E65A1F] transition duration-300">
            {language === "bn" ? "যোগাযোগ করুন" : "Get In Touch"}
          </button>
        </div>
      </div>
    </div>
  );
}
