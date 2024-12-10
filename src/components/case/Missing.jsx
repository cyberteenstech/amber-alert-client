"use client";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { AlertTriangle, Clock, MapPin, Share2 } from 'lucide-react';
import { missingDatas } from '../../../public/missing';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import html2canvas from "html2canvas";

const MissingCard = ({ data, language }) => {
    const { name, age, lastSeen, date, image } = data[language];
    const title = `Missing Child: ${name}`;
    const [shareUrl, setShareUrl] = useState("");
    const [clicked, setClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal
    const posterRef = useRef(null);

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const downloadPoster = async () => {
        setClicked(true);
        const element = posterRef.current;
        if (element) {
            const canvas = await html2canvas(element, {
                scale: 2,
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            canvas.toBlob((blob) => {
                if (blob) {
                    const link = document.createElement("a");
                    const url = URL.createObjectURL(blob);
                    link.href = url;
                    link.download = `missing_poster.png`;
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
                    <button
                        onClick={toggleModal}
                        className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300 w-full">
                        Preview & Download Poster
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">Poster Preview</h3>
                        <div ref={posterRef}>
                            <div className="bg-white flex flex-col items-center p-8">
                                <h1 className="text-red-600 text-6xl font-bold mb-4">MISSING</h1>
                                <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center mb-4">
                                    <img src={image} alt={name} className="object-contain h-full" />
                                </div>
                                <div className="flex flex-col items-start w-full">
                                    <p className="text-lg"><strong>Name:</strong> {name}</p>
                                    <p className="text-lg"><strong>Age:</strong> {age}</p>
                                    <p className="text-lg"><strong>Last Seen:</strong> {lastSeen}</p>
                                    <p className="text-lg"><strong>Date:</strong> {date}</p>
                                </div>
                                <p className="mt-6 text-lg text-center">
                                    If you have any information, please contact the authorities immediately.
                                </p>
                                <p className="underline mt-4 text-[#FF7128]">www.amberalert4bangladesh.org</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={downloadPoster}
                                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300 mb-4">
                                Download Poster
                            </button>
                            <button
                                onClick={toggleModal}
                                className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 transition duration-300">
                                Close Preview
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
