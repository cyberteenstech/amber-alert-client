"use client"
import React, { useEffect, useState, useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import { AlertTriangle, Phone, Calendar, Clock, MapPin, Share2, Download, Eye, User } from 'lucide-react';
import { useRouter } from "next/navigation";
import { generatePoster } from "@/utils/posterGenerator";
import axios from "axios";
import Link from "next/link"

// API URL - replace with your actual API endpoint
const API_URL = "https://api.amberalert4bangladesh.org/api/v1";

const MissingCard = ({ child, language }) => {
  const router = useRouter();
  const [shareUrl, setShareUrl] = useState("");
  const posterRef = useRef(null);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleDownloadPoster = (e) => {
    e.stopPropagation();
    generatePoster(child);
  };

  const formatDate = (dateString) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={child.imageUrl}
          alt={child.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg">
          {language === "bn" ? "জরুরি" : "Urgent"}
        </div>
        <button
          onClick={handleDownloadPoster}
          className="absolute bottom-2 right-2 bg-white text-red-600 hover:bg-red-50 p-2 rounded-full shadow-md transition-colors"
          title="Download Poster"
        >
          <Download size={18} />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{child.name}</h3>
        <p className="text-lg text-gray-600 mb-4">
          {child.age} {language === "bn" ? "বছর বয়সী" : "years old"}
        </p>

        {child.contactName && (
          <div className="flex items-center mb-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700">
              {language === "bn" ? "অভিভাবক:" : "Guardian:"} {child.contactName}
            </span>
          </div>
        )}

        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-700">
            {language === "bn" ? "হারানোর জায়গা:" : "Missing Place:"} {child.location}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <Clock className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-700">
            {language === "bn" ? "হারানোর তারিখ:" : "Missing From:"} {formatDate(child.lastSeen)}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleDownloadPoster}
            className="flex-1 bg-[#FF7128] text-white py-2 px-4 rounded-md hover:bg-[#FF7128] transition duration-300 flex items-center justify-center text-[15px]"
          >
            <Download className="w-5 h-5 mr-2" />
            {language === "bn" ? "পোস্টার ডাউনলোড" : "Download Poster"}
          </button>
          <Link
          href={`/missing/${child._id}`}
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
  const [language, setLanguage] = useState("en"); // Default language
  const [recentMissingChildren, setRecentMissingChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentMissingChildren = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from your API
        const response = await axios.get(`${API_URL}/missing`);

        console.log(response)
        if (response.status == 200) {
          setRecentMissingChildren(response.data.data);
        } else {
          setError('Failed to fetch recent missing children');
        }
      } catch (err) {
        setError('An error occurred while fetching data');
        console.error(err);

      } finally {
        setLoading(false);
      }
    };

    fetchRecentMissingChildren();
  }, []);

  console.log(recentMissingChildren)
  // Toggle language function (for demo)
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "bn" : "en");
  };

  const pageTitle =
    language === "bn" ? "সাম্প্রতিক হারানো শিশু" : "Recent Missing Cases";
  const pageSubtitle =
    language === "bn"
      ? "এই শিশুদের আপনার সাহায্যের প্রয়োজন। অনুগ্রহ করে কেসগুলি পর্যালোচনা করুন এবং আপনার কাছে থাকা যে কোনো তথ্য রিপোর্ট করুন।"
      : "These children need your help. Please review the cases and report any information you may have.";

  return (
    <div className="bg-gradient-to-b from-red-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center text-[#FF7128] mb-6">
          {pageTitle}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {pageSubtitle}
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">
              {language === "bn" ? "লোড হচ্ছে..." : "Loading..."}
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
            <AlertTriangle size={24} className="text-red-600 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800">
                {language === "bn" ? "ত্রুটি" : "Error"}
              </h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentMissingChildren.map((child) => (
              <MissingCard
                key={child._id}
                child={child}
                language={language}
              />
            ))}
          </div>
        )}

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