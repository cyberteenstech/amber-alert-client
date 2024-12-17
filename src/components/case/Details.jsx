"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, Share2, Phone, MapPin, Calendar, Clock, User, Users, FileText, LinkIcon, CheckCircle } from 'lucide-react'
import { missingDatas } from "../../../public/missing"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

const translations = {
    en: {
        loading: "Loading...",
        found: "Found",
        deceased: "Deceased",
        missing: "Missing",
        verified: "Verified",
        age: "Age",
        lostPlace: "Lost Place",
        lostDate: "Lost Date",
        lostTime: "Lost Time",
        address: "Address",
        fathersName: "Father's Name",
        mothersName: "Mother's Name",
        guardiansName: "Guardian's Name",
        fathersContact: "Father's Contact",
        mothersContact: "Mother's Contact",
        guardiansContact: "Guardian's Contact",
        description: "Description",
        lostSource: "Lost Source",
        viewOriginalPost: "View Original Post",
        callEmergency: "Call Emergency",
        shareDetails: "Share Details",
        shareError: "Error sharing. Your browser might not support this feature.",
    },
    bn: {
        loading: "লোড হচ্ছে...",
        found: "পাওয়া গেছে",
        deceased: "মৃত",
        missing: "নিখোঁজ",
        verified: "যাচাইকৃত",
        age: "বয়স",
        lostPlace: "হারানোর স্থান",
        lostDate: "হারানোর তারিখ",
        lostTime: "হারানোর সময়",
        address: "ঠিকানা",
        fathersName: "পিতার নাম",
        mothersName: "মাতার নাম",
        guardiansName: "অভিভাবকের নাম",
        fathersContact: "পিতার যোগাযোগ",
        mothersContact: "মাতার যোগাযোগ",
        guardiansContact: "অভিভাবকের যোগাযোগ",
        description: "বিবরণ",
        lostSource: "হারানোর উৎস",
        viewOriginalPost: "মূল পোস্ট দেখুন",
        callEmergency: "জরুরি কল করুন",
        shareDetails: "শেয়ার করুন",
        shareError: "শেয়ার করতে সমস্যা হচ্ছে। আপনার ব্রাউজার এই ফিচারটি সমর্থন নাও করতে পারে।",
    }
}

const Badge = ({ children, variant }) => {
    const baseClasses = "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium"
    const variantClasses = {
        success: "bg-green-50 text-green-700 ring-1 ring-green-600/20",
        destructive: "bg-red-50 text-red-700 ring-1 ring-red-600/20",
        secondary: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/10",
        outline: "bg-white text-gray-700 ring-1 ring-gray-900/10",
    }

    return <span className={`${baseClasses} ${variantClasses[variant]}`}>{children}</span>
}

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
    const baseClasses = "px-4 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center justify-center"
    const variantClasses = {
        primary: "bg-red-600 hover:bg-red-700 text-white shadow-sm",
        outline: "bg-white text-red-600 ring-1 ring-red-600 hover:bg-red-50",
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

const InfoItem = ({ icon, label, value }) => {
    if (!value) return null

    return (
        <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <div className="mt-0.5 text-red-600">{icon}</div>
            <div className="space-y-1">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-medium text-gray-900">{value}</p>
            </div>
        </div>
    )
}

const DetailsPage = ({ id }) => {
    const { language } = useLanguage()
    const [data, setData] = useState(null)
    const [isClient, setIsClient] = useState(false)

    const t = translations[language]

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (id) {
            const missingPerson = missingDatas.find((item) => item.id === parseInt(id))
            setData(missingPerson[language])
        }
    }, [id, language])

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${t.missing}: ${data.name}`,
                    text: `${data.name}, ${data.age} ${t.age}, ${t.lostPlace}: ${data.lostPlace}`,
                    url: window.location.href,
                })
            } catch (error) {
                console.error('Error sharing:', error)
            }
        } else {
            alert(t.shareError)
        }
    }

    if (!data) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <div className="text-center">
                    <div className="h-32 w-32 animate-pulse rounded-full bg-gray-200" />
                    <p className="mt-4 text-gray-500">{t.loading}</p>
                </div>
            </div>
        )
    }

    const getStatusBadge = () => {
        if (data.isFound) return <Badge variant="success">{t.found}</Badge>
        if (data.isDead) return <Badge variant="destructive">{t.deceased}</Badge>
        return <Badge variant="secondary">{t.missing}</Badge>
    }
  const shareUrl = "http://amberalert4bangladesh.org";
  const shareMessage = `❗ ${t.missing} ❗
নাম: ${data.name}
বয়স: ${data.age}
হারানোর স্থান: ${data.lostPlace}
হারানোর তারিখ: ${data.lostDate}
দয়া করে শেয়ার করুন এবং সাহায্য করুন। 🙏`;
  console.log({t, data})
    return (
        <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5">
                <div className="p-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="flex w-full justify-end">
              <div className="flex gap-2">
                <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareMessage}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <WhatsappShareButton url={shareUrl} title={shareMessage}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton url={shareUrl} summary={shareMessage}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <EmailShareButton url={shareUrl} subject={t.shareDetails} body={shareMessage}>
                <EmailIcon size={32} round />
              </EmailShareButton>
              </div>
            </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{data.name}</h1>
                        <div className="flex gap-2">
                            {getStatusBadge()}
                            {data.isVerified && (
                                <Badge variant="outline">
                                    <CheckCircle className="mr-1.5 h-3.5 w-3.5" />
                                    {t.verified}
                                </Badge>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
                        <div className="lg:w-1/3">
                            <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    width={400}
                                    height={500}
                                    className="aspect-[3/4] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <InfoItem icon={<User className="h-5 w-5" />} label={t.age} value={data.age} />
                                <InfoItem icon={<MapPin className="h-5 w-5" />} label={t.lostPlace} value={data.lostPlace} />
                                <InfoItem icon={<Calendar className="h-5 w-5" />} label={t.lostDate} value={data.lostDate} />
                                <InfoItem icon={<Clock className="h-5 w-5" />} label={t.lostTime} value={data.lostTime} />
                                <InfoItem icon={<MapPin className="h-5 w-5" />} label={t.address} value={data.address} />
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <InfoItem icon={<User className="h-5 w-5" />} label={t.fathersName} value={data.fathersName} />
                                    <InfoItem icon={<User className="h-5 w-5" />} label={t.mothersName} value={data.mothersName} />
                                    <InfoItem icon={<Users className="h-5 w-5" />} label={t.guardiansName} value={data.guardiansName} />
                                    <InfoItem icon={<Phone className="h-5 w-5" />} label={t.fathersContact} value={data.fathersContactNo} />
                                    <InfoItem icon={<Phone className="h-5 w-5" />} label={t.mothersContact} value={data.mothersContactNo} />
                                    <InfoItem icon={<Phone className="h-5 w-5" />} label={t.guardiansContact} value={data.guardianContactNo} />
                                </div>
                            </div>

                            {data.description && (
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <FileText className="mt-0.5 h-5 w-5 text-red-600" />
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-500">{t.description}</p>
                                            <p className="text-gray-900">{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {data.lostSource && (
                                <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-4">
                                    <LinkIcon className="h-5 w-5 text-red-600" />
                                    <span className="text-sm text-gray-500">{t.lostSource}:</span>
                                    <span className="font-medium text-gray-900">{data.lostSource}</span>
                                    {data.originalPost && (
                                        <Link href="/" className="text-red-600 hover:text-red-700 hover:underline">
                                            {t.viewOriginalPost}
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col gap-4 border-t bg-gray-50/50 p-6 sm:flex-row sm:items-center sm:justify-center">
                    <Button className="sm:min-w-[200px]">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        {t.callEmergency}
                    </Button>
                </div> */}
            </div>
        </div>
    )
}

export default DetailsPage

