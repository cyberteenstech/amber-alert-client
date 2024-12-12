"use client";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { AlertTriangle, Clock, MapPin, Share2, Download, Eye } from 'lucide-react';
import { missingDatas } from '../../../public/missing';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import html2canvas from "html2canvas";

const MissingCard = ({ data, language }) => {
    const { name, age, lostDate, lostPlace,lostTime, image, guardianContactNo } = data[language];
    const title = `Missing Child: ${name}`;
    const [shareUrl, setShareUrl] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const posterRef = useRef(null);

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

        const downloadPoster = async () => {
        const element = posterRef.current;
        if (element) {
            const imgElement = element.querySelector('img');
            if (imgElement) {
              await new Promise((resolve) => {
                if (imgElement.complete) {
                  resolve();
                } else {
                  imgElement.onload = resolve;
                }
              });
            }

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
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
        }
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative">
                <Image src={image} alt={name} width={500} height={300} className="w-full h-64 object-cover" />
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                    {language === 'bn' ? 'জরুরি' : 'Urgent'}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-lg text-gray-600 mb-4">{age} {language === 'bn' ? 'বছর বয়সী' : 'years old'}</p>
                <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{language === 'bn' ? 'হারানোর জায়গা:' : 'Missing Place:'} {lostPlace}</span>
                </div>
                <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{language === 'bn' ? 'হারানোর তারিখ:' : 'Missing From:'} {lostPlace}</span>
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
                        onClick={toggleModal}
                        className="flex-1 bg-[#FF7128] text-white py-2 px-4 rounded-md hover:bg-[#FF7128] transition duration-300 flex items-center justify-center text-[15px]"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        {language === 'bn' ? 'পোস্টার ডাউনলোড' : 'Download Poster'}
                    </button>
                    <Link href={`/cases/missing/${data.id}`} className="flex-1 border-[#FF7128] text-[#FF7128] py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center text-[15px]">
                        <Eye className="w-5 h-5 mr-2" />
                        {language === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}
                    </Link>
                </div>
            </div>

                {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full mx-auto max-h-[90vh] overflow-y-auto">
                        <h3 className="text-2xl font-semibold mb-4">
                            {language === 'bn' ? 'পোস্টার প্রিভিউ' : 'Poster Preview'}
                        </h3>
                        <div ref={posterRef} className="bg-[#800020] p-4 rounded-lg relative">
                            {/* Yellow border */}
                            <div className="border-4 border-yellow-400 p-2">
                                {/* Top MISSING text */}
                                <h1 className="text-yellow-400 text-4xl font-bold text-center mb-2">
                                    {language === 'bn' ? 'নিখোঁজ' : 'MISSING'}
                                </h1>
                                
                                {/* CAN YOU HELP? */}
                                <h2 className="text-[#800020] text-2xl font-bold text-center mb-3 bg-white py-1">
                                    {language === 'bn' ? 'আপনি কি সাহায্য করতে পারেন?' : 'CAN YOU HELP?'}
                                </h2>

                                {/* White content area */}
                                <div className="bg-white p-3">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        {/* Photo section */}
                                        <div className="w-full sm:w-1/3 h-48 sm:h-auto bg-gray-200 flex-shrink-0">
                                            <img 
                                                src={image} 
                                                alt={name} 
                                                className="w-full h-full object-cover" 
                                                crossOrigin="anonymous"
                                            />
                                        </div>

                                        {/* Details section */}
                                        <div className="flex-1 space-y-1 text-sm">
                                            <h3 className="text-xl font-serif mb-2">{name}</h3>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'নিখোঁজের স্থানঃ' : 'Missing From:'}
                                                </span>
                                                <span>{lostDate} {`,`} {lostTime}</span>
                                            </p>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'নিখোঁজের তারিখঃ' : 'Missing Date:'}
                                                </span>
                                                <span>{date}</span>
                                            </p>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'বয়সঃ' : 'Age:'}
                                                </span>
                                                <span>{age}</span>
                                            </p>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'উচ্চতাঃ' : 'Height:'}
                                                </span>
                                                <span>{data[language].height || 'Not specified'}</span>
                                            </p>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'ওজনঃ' : 'Weight:'}
                                                </span>
                                                <span>{data[language].weight || 'Not specified'}</span>
                                            </p>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'চুলের রংঃ' : 'Hair:'}
                                                </span>
                                                <span>{data[language].hair || 'Not specified'}</span>
                                            </p>
                                            <p className="flex gap-2">
                                                <span className="text-[#800020] font-semibold min-w-[120px]">
                                                    {language === 'bn' ? 'চোখের রংঃ' : 'Eyes:'}
                                                </span>
                                                <span>{data[language].eyes || 'Not specified'}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact section */}
                                    <div className="mt-3 text-center">
                                        <p className="text-base mb-2">
                                            {language === 'bn' 
                                                ? 'আপনি যদি এই ব্যক্তিকে দেখে থাকেন তবে অনুগ্রহ করে কল করুন' 
                                                : 'If you have seen this person? please call'}
                                        </p>
                                        <div className="text-[#800020] text-2xl font-bold mb-2">
                                             {guardianContactNo}
                                        </div>
                                        <p className="text-xs">
                                            {language === 'bn' 
                                                ? 'অতিরিক্ত তথ্যঃ http://amberalert4bangladesh.org' 
                                                : 'More Detail: http://amberalert4bangladesh.org'}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom MISSING text */}
                                <h1 className="text-yellow-400 text-4xl font-bold text-center mt-2">
                                    {language === 'bn' ? 'নিখোঁজ' : 'MISSING'}
                                </h1>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button
                                onClick={downloadPoster}
                                className="bg-[#800020] text-white py-2 px-4 rounded-md hover:bg-[#600018] transition duration-300"
                            >
                                {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                            </button>
                            <button
                                onClick={toggleModal}
                                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                            >
                                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const RecentMissing = () => {
    const { language } = useLanguage();

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

