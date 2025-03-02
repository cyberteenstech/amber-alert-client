"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format, formatDistanceToNow } from "date-fns";
import { AlertTriangle, Share2, Phone, MapPin, Calendar, User, FileText, Download, Mail } from 'lucide-react';
import axios from "axios";
import { generatePoster } from "@/utils/posterGenerator";

// API URL - replace with your actual API endpoint
const API_URL = "https://api.amberalert4bangladesh.org/api/v1";

const translations = {
    en: {
        loading: "Loading...",
        missing: "Missing",
        age: "Age",
        lostPlace: "Last Seen Location",
        lostDate: "Last Seen Date",
        description: "Description",
        shareDetails: "Share Details",
        downloadPoster: "Download Poster",
        shareError: "Error sharing. Your browser might not support this feature.",
        backToList: "Back to Missing Children",
        contactPhone: "Contact Phone",
        contactEmail: "Contact Email",
        contactName: "Contact Name"
    },
    bn: {
        loading: "লোড হচ্ছে...",
        missing: "নিখোঁজ",
        age: "বয়স",
        lostPlace: "হারানোর স্থান",
        lostDate: "হারানোর তারিখ",
        description: "বিবরণ",
        shareDetails: "শেয়ার করুন",
        downloadPoster: "পোস্টার ডাউনলোড করুন",
        shareError: "শেয়ার করতে সমস্যা হচ্ছে। আপনার ব্রাউজার এই ফিচারটি সমর্থন নাও করতে পারে।",
        backToList: "নিখোঁজ শিশুদের তালিকায় ফিরে যান",
        contactPhone: "যোগাযোগের ফোন",
        contactEmail: "যোগাযোগের ইমেইল",
        contactName: "যোগাযোগের নাম"
    }
};

const Badge = ({ children, variant }) => {
    const baseClasses = "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium";
    const variantClasses = {
        destructive: "bg-red-50 text-red-700 ring-1 ring-red-600/20",
    };

    return <span className={`${baseClasses} ${variantClasses[variant]}`}>{children}</span>;
};

const InfoItem = ({ icon, label, value }) => {
    if (!value) return null;

    return (
        <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <div className="mt-0.5 text-red-600">{icon}</div>
            <div className="space-y-1">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-medium text-gray-900">{value}</p>
            </div>
        </div>
    );
};

const DetailsPage = ({id}) => {
    console.log("ID", id)
    const router = useRouter();
    const [language, setLanguage] = useState("en"); // Default language
    const [child, setChild] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const t = translations[language];

    useEffect(() => {
        const fetchChildDetails = async () => {
            if (!id) return;

            try {
                setLoading(true);
                // In a real app, you would fetch from your API
                const response = await axios.get(`${API_URL}/missing/${id}`);

                if (response.status === 200) {
                    setChild(response.data.data);
                } else {
                    setError('Failed to fetch missing person details');
                }
            } catch (err) {
                setError('An error occurred while fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchChildDetails();
    }, [id]);

    // Toggle language function (for demo)
    const toggleLanguage = () => {
        setLanguage(prev => prev === "en" ? "bn" : "en");
    };

    const handleShare = async () => {
        if (!child) return;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${t.missing}: ${child.name}`,
                    text: `${child.name}, ${child.age} ${t.age}, ${t.lostPlace}: ${child.location}`,
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
                alert(t.shareError);
            }
        } else {
            alert(t.shareError);
        }
    };

    const handleDownloadPoster = () => {
        if (child) {
            generatePoster(child);
        }
    };

    const handleBackToList = () => {
        router.push('/cases/missing')
    };

    if (loading) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
                    <p className="mt-4 text-gray-500">{t.loading}</p>
                </div>
            </div>
        );
    }

    if (error || !child) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start">
                        <AlertTriangle size={24} className="text-red-600 mr-3 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-semibold text-red-800 mb-2">Error</h2>
                            <p className="text-red-700 mb-4">{error || 'Missing person not found'}</p>
                            <button
                                onClick={handleBackToList}
                                className="inline-flex items-center text-red-600 hover:text-red-700"
                            >
                                {t.backToList}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        try {
            return format(new Date(dateString), 'PPP');
        } catch (error) {
            return dateString;
        }
    };

    const formatTimeSince = (dateString) => {
        try {
            return formatDistanceToNow(new Date(dateString), { addSuffix: true });
        } catch (error) {
            return dateString;
        }
    };

    return (
        <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={handleBackToList}
                    className="inline-flex items-center text-red-600 hover:text-red-700"
                >
                    ← {t.backToList}
                </button>

                <button
                    onClick={toggleLanguage}
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                    {language === "en" ? "বাংলা" : "English"}
                </button>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5">
                <div className="p-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="flex w-full justify-end">
                            <div className="flex gap-2">
                                <button
                                    onClick={handleShare}
                                    className="bg-blue-50 text-blue-600 hover:bg-blue-100 p-2 rounded-full"
                                    title={t.shareDetails}
                                >
                                    <Share2 size={20} />
                                </button>
                                <button
                                    onClick={handleDownloadPoster}
                                    className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-full"
                                    title={t.downloadPoster}
                                >
                                    <Download size={20} />
                                </button>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{child.name}</h1>
                        <div className="flex gap-2">
                            <Badge variant="destructive">{t.missing}</Badge>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
                        <div className="lg:w-1/3">
                            <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                                <img
                                    src={child.imageUrl}
                                    alt={child.name}
                                    className="aspect-[3/4] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <InfoItem icon={<User className="h-5 w-5" />} label={t.age} value={`${child.age} ${language === "bn" ? "বছর" : "years"}`} />
                                <InfoItem icon={<User className="h-5 w-5" />} label="Gender" value={child.gender} />
                                <InfoItem icon={<MapPin className="h-5 w-5" />} label={t.lostPlace} value={child.location} />
                                <InfoItem
                                    icon={<Calendar className="h-5 w-5" />}
                                    label={t.lostDate}
                                    value={
                                        <>
                                            {formatDate(child.lastSeen)}
                                            <div className="text-sm text-gray-500 mt-1">
                                                ({formatTimeSince(child.lastSeen)})
                                            </div>
                                        </>
                                    }
                                />
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {child.contactName && (
                                        <InfoItem icon={<User className="h-5 w-5" />} label={t.contactName} value={child.contactName} />
                                    )}
                                    <InfoItem icon={<Phone className="h-5 w-5" />} label={t.contactPhone} value={child.contactPhone} />
                                    {child.contactEmail && (
                                        <InfoItem icon={<Mail className="h-5 w-5" />} label={t.contactEmail} value={child.contactEmail} />
                                    )}
                                </div>
                            </div>

                            {child.description && (
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <FileText className="mt-0.5 h-5 w-5 text-red-600" />
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-500">{t.description}</p>
                                            <p className="text-gray-900">{child.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <AlertTriangle size={24} className="text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                                            {language === "bn" ? "গুরুত্বপূর্ণ বিজ্ঞপ্তি" : "Important Notice"}
                                        </h3>
                                        <p className="text-yellow-700">
                                            {language === "bn"
                                                ? "আপনি যদি এই ব্যক্তিকে দেখে থাকেন বা তার অবস্থান সম্পর্কে কোন তথ্য রাখেন, অনুগ্রহ করে অবিলম্বে কর্তৃপক্ষের সাথে যোগাযোগ করুন। নিজে থেকে হস্তক্ষেপ করার চেষ্টা করবেন না।"
                                                : "If you have seen this person or have any information regarding their whereabouts, please contact the authorities immediately. Do not attempt to approach or intervene on your own."
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;