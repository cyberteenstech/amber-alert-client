"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import html2canvas from "html2canvas";
import Link from "next/link";
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import { useLanguage } from "@/contexts/LanguageContext";

// MissingCard Component
const MissingCard = ({ data, language }) => {
    const { name, age, lastSeen, date, image, address, contact } = data[language];
    const title = `Missing Child: ${name}`;
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const downloadPoster = async () => {
        const posterElement = document.getElementById(`poster-${data.id}`);
        if (!posterElement) return;

        const canvas = await html2canvas(posterElement);
        const dataURL = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `${name}-poster.png`;
        link.click();
    };

    return (
        <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden">
            <div id={`poster-${data.id}`} className="p-6 bg-gray-50 rounded-lg">
                {/* Poster Content */}
                <div className="relative mb-4">
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={500}
                        className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                        Urgent
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
                <p className="text-lg text-gray-600">{age} years old</p>
                <div className="text-gray-700 my-2">
                    <MapPin className="inline w-5 h-5 text-gray-500 mr-2" />
                    <span>{address}</span>
                </div>
                <div className="text-gray-700 my-2">
                    <AlertTriangle className="inline w-5 h-5 text-gray-500 mr-2" />
                    <span>{contact}</span>
                </div>
                <div className="text-gray-700 my-2">
                    <Clock className="inline w-5 h-5 text-gray-500 mr-2" />
                    <span>{`Last Seen: ${lastSeen}`}</span>
                </div>
                <div className="text-center text-blue-600 mt-4">
                    <Link href="http://amberalert4bangladesh.org/" target="_blank" passHref>
                        amberalert4bangladesh.org
                    </Link>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={downloadPoster}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-full"
                >
                    Download Poster
                </button>
            </div>
        </div>
    );
};

// RecentMissing Component
const RecentMissing = () => {
const { language } = useLanguage(); // Get the language from context

// Dynamically updating the page title and subtitle based on language
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
            <p className="text-xl text-center text-gray-600 mb-12">{pageSubtitle}</p>
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
                        {language === "bn" ? "জরুরি হটলাইন কল করুন" : "Call Emergency Hotline"}
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
