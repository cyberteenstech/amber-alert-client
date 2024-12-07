"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { AlertTriangle, Clock, MapPin, Share2 } from 'lucide-react';
import { missingDatas } from '../../../public/missing';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const MissingCard = ({ data, language }) => {
    const { name, age, lastSeen, date, image } = data[language];
    const title = `Missing Child: ${name}`; // Customize the title you want to share
    const [shareUrl, setShareUrl] = useState("");
    
    useEffect(() => {
        // This code will run only on the client side (browser)
        setShareUrl(window.location.href);
    }, []); // Empty dependency array ensures this runs only once after mount
    return (
        <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden">
            <div className="relative">
                <Image src={image} alt={name} width={500} height={500} className="w-full h-80 object-cover rounded-t-lg" />
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg">Urgent</div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
                        <p className="text-lg text-gray-600">{age} years old</p>
                    </div>
                    <div className="flex space-x-3">
                        <FacebookShareButton url={shareUrl} quote={title}>
                            <FacebookIcon size={24} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl} title={title}>
                            <TwitterIcon size={24} round />
                        </TwitterShareButton>
                        <WhatsappShareButton url={shareUrl} title={title}>
                            <WhatsappIcon size={24} round />
                        </WhatsappShareButton>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Last seen: {lastSeen}</span>
                </div>
                <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Date: {date}</span>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300 w-full">
                        Report Info
                    </button>
                    <Link href={data.link} target="_blank" passHref className="border border-red-600 text-red-600 py-2 px-6 rounded-md hover:bg-red-50 transition duration-300 w-full text-center">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};


const RecentMissing = () => {
    const { language } = useLanguage();  // Get the language from context

    // Dynamically updating the page title and subtitle based on language
    const pageTitle = language === 'bn' ? 'সাম্প্রতিক হারানো শিশু' : 'Recent Missing Cases';
    const pageSubtitle =
        language === 'bn'
            ? 'এই শিশুদের আপনার সাহায্যের প্রয়োজন। অনুগ্রহ করে কেসগুলি পর্যালোচনা করুন এবং আপনার কাছে থাকা যে কোনো তথ্য রিপোর্ট করুন।'
            : 'These children need your help. Please review the cases and report any information you may have.';

    return (
        <div className="bg-gradient-to-b from-red-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#FF7128] mb-6">{pageTitle}</h1>
                <p className="text-xl text-center text-gray-600 mb-12">{pageSubtitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {missingDatas.map((caseItem) => (
                        <MissingCard key={caseItem.id} data={caseItem} language={language} />
                    ))}
                </div>
                <div className="mt-16 bg-red-100 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-semibold text-red-800 mb-4">
                        {language === 'bn' ? 'আপনার কাছে তথ্য আছে?' : 'Have Information?'}
                    </h2>
                    <p className="text-gray-700 mb-8">
                        {language === 'bn'
                            ? 'আপনার কাছে যদি এই কেসগুলির সম্পর্কে কোনো তথ্য থাকে তবে দয়া করে তাত্ক্ষণিকভাবে কর্তৃপক্ষের সাথে যোগাযোগ করুন। আপনার সাহায্য একটি জীবন বাঁচাতে পারে।'
                            : 'If you have any information about these cases, please contact authorities immediately. Your help could save a life.'}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">
                            {language === 'bn' ? 'জরুরি হটলাইন কল করুন' : 'Call Emergency Hotline'}
                        </button>
                        <button className="bg-white text-red-600 font-bold py-3 px-6 rounded-full border-2 border-red-600 hover:bg-red-50 transition duration-300">
                            {language === 'bn' ? 'অনলাইনে টিপ জমা দিন' : 'Submit Tip Online'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentMissing;
