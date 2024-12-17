"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
    const { language } = useLanguage();

    return (
        <div className='bg-[#F9DFDF]'>
            <div className='max-w-[1440px] mx-auto px-4 md:px-10 md:py-[110px] py-[56px] grid grid-cols-1 md:grid-cols-3 justify-around'>
                {/* Logo and Description */}
                <div>
                    <div className="flex items-center gap-x-2">
                        <Image
                            src="/amberalert.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <p className='md:my-4 my-2 text-[#072E75] font-normal md:text-[16px] text-[14px]'>
                        {language === 'bn'
                            ? 'Amber Alert for Bangladesh একটি জাতীয় উদ্যোগ, যার লক্ষ্য নিখোঁজ শিশুদের দ্রুত খুঁজে বের করার জন্য একটি জরুরি সতর্কতা ব্যবস্থা চালু করা। আন্তর্জাতিক সফল মডেল থেকে অনুপ্রাণিত হয়ে, আমরা সচেতনতা তৈরি, জনসমর্থন জোগাড় এবং সরকারের সঙ্গে কাজ করে প্রতিটি শিশুর সুরক্ষা নিশ্চিত করতে চাই।'
                            : 'Amber Alert for Bangladesh is a national initiative aimed at establishing an emergency alert system to quickly locate missing children. Inspired by successful international models, we aim to raise awareness, gather public support, and work with the government to ensure the safety of every child.'}
                    </p>
                </div>

                {/* Site Map */}
                <div className='flex md:justify-center md:mt-0 mt-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-[#072E75] font-semibold md:text-[20px] text-[16px] mb-4'>
                            {language === 'bn' ? 'সাইট ম্যাপ' : 'Site Map'}
                        </h2>
                        <Link href="/goals" className='text-[#072E75] md:text-[16px] text-[14px]'>
                            {language === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Goals'}
                        </Link>
                        <Link href="/contact" className='text-[#072E75] md:text-[16px] text-[14px] mt-2'>
                            {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                        </Link>
                        <Link href="/about" className='text-[#072E75] md:text-[16px] text-[14px] mt-2'>
                            {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
                        </Link>
                    </div>
                </div>

                {/* Contact and Social Media */}
                <div className='flex flex-col md:items-end md:mt-0 mt-4'>
                    <h2 className='text-[#072E75] font-semibold md:text-[20px] text-[16px] mb-4'>
                        {language === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}
                    </h2>
                    <Link href="/" className='text-[#072E75] md:text-[16px] text-[14px] mt-2'>
                        {language === 'bn' ? 'ইমেইল: amberalert@13219.help' : 'Email: amberalert@13219.help'}
                    </Link>

                    {/* Social Media Section */}
                    <div className='flex gap-4 mt-4'>
                        <Link href="https://www.facebook.com/amberalert4bangladesh" _blank="true" className='text-[#072E75]'>
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="https://www.facebook.com/amberalert4bangladeshm" _blank="true" className='text-[#072E75]'>
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="https://www.facebook.com/amberalert4bangladesh" _blank="true" className='text-[#072E75]'>
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
