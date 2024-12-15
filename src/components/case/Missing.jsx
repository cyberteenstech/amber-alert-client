"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AlertTriangle, Phone, Calendar, Clock, MapPin, Share2, Download, Eye } from 'lucide-react';
import { missingDatas } from "../../../public/missing";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import html2canvas from "html2canvas";

const MissingCard = ({ data, language }) => {
  const { name, age, lostDate, lostPlace, lostTime, image, guardianContactNo } =
    data[language];
  const title = `Missing Child: ${name}`;
  const [shareUrl, setShareUrl] = useState("");
  const posterRef = useRef(null);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const downloadPoster = async () => {
      const posterContent = `
    <div style="width: 1200px; height: 628px; background-color: white; position: relative; font-family: Arial, sans-serif; display: flex; flex-direction: column;">
      <!-- Header Banner -->
      <div style="background-color: #DC2626; color: white; padding: 12px 24px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span style="font-weight: bold; font-size: 28px;">MISSING PERSON</span>
        </div>
        <div style="font-size: 28px; font-weight: bold;">নিখোঁজ ব্যক্তি</div>
      </div>

      <!-- Main Content -->
      <div style="flex: 1; display: flex; padding: 24px; background: linear-gradient(to bottom, #FEF2F2, white);">
        <div style="display: flex; gap: 32px; width: 100%; max-width: 1000px; margin: 0 auto;">
          <!-- Left Column - Photo -->
          <div style="flex: 0 0 45%;">
            <div style="aspect-ratio: 3/4; border-radius: 8px; border: 4px solid #DC2626; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
              <img src="${image}" alt="${name}" style="width: 100%; height: "600px"; object-fit: cover;" crossorigin="anonymous" />
            </div>
          </div>

          <!-- Right Column - Details -->
          <div style="flex: 1; display: flex; flex-direction: column;">
            <div style="margin-bottom: 20px;">
              <h2 style="font-size: 36px; font-weight: bold; color: #DC2626; margin: 0;">${name}</h2>
              <p style="font-size: 24px; color: #4B5563; margin: 8px 0;">${age} ${language === "bn" ? "বছর বয়সী" : "years old"}</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; gap: 12px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div>
                  <p style="font-weight: 600; color: #4B5563; margin: 0;">${language === "bn" ? "নিখোঁজের স্থান" : "Last Seen Location"}</p>
                  <p style="color: #111827; margin: 4px 0 0 0; font-size: 18px;">${lostPlace}</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <div>
                  <p style="font-weight: 600; color: #4B5563; margin: 0;">${language === "bn" ? "নিখোঁজের তারিখ" : "Date Missing"}</p>
                  <p style="color: #111827; margin: 4px 0 0 0; font-size: 18px;">${lostDate}</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <div>
                  <p style="font-weight: 600; color: #4B5563; margin: 0;">${language === "bn" ? "নিখোঁজের সময়" : "Time Missing"}</p>
                  <p style="color: #111827; margin: 4px 0 0 0; font-size: 18px;">${lostTime || "N/A"}</p>
                </div>
              </div>
            </div>

            <!-- Contact Box -->
            <div style="background-color: #FEF2F2; padding: 16px; border-radius: 8px; border: 1px solid #FCA5A5; margin-top: auto;">
              <p style="font-size: 18px; text-align: center; margin: 0 0 8px 0;">
                ${language === "bn"
                  ? "যদি আপনি এই ব্যক্তিকে দেখে থাকেন তবে অনুগ্রহ করে যোগাযোগ করুন"
                  : "If you have any information, please contact"}
              </p>
              <div style="display: flex; justify-content: center; align-items: center; gap: 8px; font-size: 24px; font-weight: bold; color: #DC2626;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>${guardianContactNo || "Emergency Hotline: 999"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer with Amber Alert Logo -->
      <div style="background-color: #F3F4F6; padding: 12px; display: flex; justify-content: center; align-items: center; gap: 16px;">
        <img src="https://amberalert4bangladesh.org/wp-content/uploads/2023/11/cropped-amber-alert-logo-1.png" alt="Amber Alert Logo" style="height: 40px; width: auto;" crossorigin="anonymous" />
        <div style="display: flex; flex-direction: column; align-items: center;">
          <p style="margin: 0; font-size: 14px; color: #4B5563;">
            ${language === "bn"
              ? "অতিরিক্ত তথ্যের জন্য ভিজিট করুন"
              : "For more information visit"}
          </p>
          <a href="http://amberalert4bangladesh.org" style="color: #DC2626; text-decoration: none; font-weight: 500; font-size: 16px;">
            www.amberalert4bangladesh.org
          </a>
        </div>
      </div>
    </div>
  `;
  const tempDiv = document.createElement('div');
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  tempDiv.innerHTML = posterContent;
  document.body.appendChild(tempDiv);

  try {
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      width: 1200,
      height: 628,
    });

    canvas.toBlob((blob) => {
      if (blob) {
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `missing_poster_${name}.png`;
        link.click();
        URL.revokeObjectURL(url);
      } else {
        console.error("Error: Failed to create blob.");
      }
    }, "image/png");
  } finally {
    document.body.removeChild(tempDiv);
  }
};

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg">
          {language === "bn" ? "জরুরি" : "Urgent"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-lg text-gray-600 mb-4">
          {age} {language === "bn" ? "বছর বয়সী" : "years old"}
        </p>
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-700">
            {language === "bn" ? "হারানোর জায়গা:" : "Missing Place:"}{" "}
            {lostPlace}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <Clock className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-700">
            {language === "bn" ? "হারানোর তারিখ:" : "Missing From:"} {lostDate}
          </span>
        </div>
        <div className="flex space-x-2 mb-4">
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={downloadPoster}
            className="flex-1 bg-[#FF7128] text-white py-2 px-4 rounded-md hover:bg-[#FF7128] transition duration-300 flex items-center justify-center text-[15px]"
          >
            <Download className="w-5 h-5 mr-2" />
            {language === "bn" ? "পোস্টার ডাউনলোড" : "Download Poster"}
          </button>
          <Link
            href={`/cases/missing/${data.id}`}
            className="flex-1 border-[#FF7128] text-[#FF7128] py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center text-[15px]"
          >
            <Eye className="w-5 h-5 mr-2" />
            {language === "bn" ? "বিস্তারিত দেখুন" : "View Details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

const RecentMissing = () => {
  const { language } = useLanguage();

  const pageTitle =
    language === "bn" ? "সাম্প্রতিক হারানো শিশু" : "Recent Missing Cases";
  const pageSubtitle =
    language === "bn"
      ? "এই শিশুদের আপনার সাহায্যের প্রয়োজন। অনুগ্রহ করে কেসগুলি পর্যালোচনা করুন এবং আপনার কাছে থাকা যে কোনো তথ্য রিপোর্ট করুন।"
      : "These children need your help. Please review the cases and report any information you may have.";

  return (
    <div className="bg-gradient-to-b from-red-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#FF7128] mb-6">
          {pageTitle}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {pageSubtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {missingDatas.map((caseItem) => (
            <MissingCard
              key={caseItem.id}
              data={caseItem}
              language={language}
            />
          ))}
        </div>
        <div className="mt-16 bg-red-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            {language === "bn" ? "আপনার কাছে তথ্য আছে?" : "Have Information?"}
          </h2>
          <p className="text-gray-700 mb-8">
            {language === "bn"
              ? "আপনার কাছে যদি এই কেসগুলির সম্পর্কে কোনো তথ্য থাকে তবে দয়া করে তাত্ক্ষণিকভাবে কর্তৃপক্ষের সাথে যোগাযোগ করুন। আপনার সাহায্য একটি জীবন বাঁচাতে পারে।"
              : "If you have any information about these cases, please contact authorities immediately. Your help could save a life."}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">
              {language === "bn"
                ? "জরুরি হটলাইন কল করুন"
                : "Call Emergency Hotline"}
            </button>
            <button className="bg-white text-red-600 font-bold py-3 px-6 rounded-full border-2 border-red-600 hover:bg-red-50 transition duration-300">
              {language === "bn" ? "অনলাইনে টিপ জমা দিন" : "Submit Tip Online"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentMissing;

