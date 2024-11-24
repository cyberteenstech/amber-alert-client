"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";
import Cookies from "js-cookie";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("bn"); // 'bn' for Bangla, 'en' for English

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const switchLanguage = () => {
        setLanguage((prev) => (prev === "bn" ? "en" : "bn"));
        
        Cookies.set("language", language === "bn" ? "en" : "bn");
    };

    return (
        <div className="py-6 px-10 bg-[#F9D8D4]">
            <div className="max-w-[1440px] flex items-center justify-between mx-auto">
                <Link href="/" className="flex items-center gap-x-2">
                    <Image
                        src="/amberalert.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-x-4">
                    <Link href="/about" className="text-[#072E75] text-lg">
                        {language === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
                    </Link>
                    <Link href="/goals" className="text-[#072E75] text-lg">
                        {language === "bn" ? "আমাদের লক্ষ" : "Our Goals"}
                    </Link>
                    <Link href="/contact" className="text-[#072E75] text-lg">
                        {language === "bn" ? "যোগাযোগ" : "Contact"}
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-x-4">
                    <button
                        onClick={switchLanguage}
                        className="text-[#FF7128] text-lg px-3 py-1 border border-[#FF7128] rounded-lg"
                    >
                        {language === "bn" ? "English" : "বাংলা"}
                    </button>
                    <Link href="#letter-section" passHref>
                        <button className="flex items-center gap-x-2 bg-[#FF7128] text-[#fff] px-4 py-2 rounded-lg">
                            <IoDocumentTextOutline className="text-xl" />
                            {language === "bn" ? "চিঠি পড়ুন" : "Read Letter"}
                        </button>
                    </Link>
                    <Link href="https://forms.gle/JGMECekHC59HRwdT7" passHref>
                        <button className="flex items-center gap-x-2 border-[#FF7128] border-[2px] text-[#FF7128] px-4 py-2 rounded-lg">
                            {language === "bn" ? "যোগ দিন" : "Join Us"}
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none z-[100]">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex flex-col items-center space-y-6 pt-20 text-white md:hidden z-[1000]">
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                            {language === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
                        </Link>
                        <Link href="/goals" onClick={() => setIsMenuOpen(false)}>
                            {language === "bn" ? "আমাদের লক্ষ" : "Our Goals"}
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                            {language === "bn" ? "যোগাযোগ" : "Contact"}
                        </Link>
                        <Link
                            href="https://forms.gle/JGMECekHC59HRwdT7"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {language === "bn" ? "যোগ দিন" : "Join Us"}
                        </Link>
                        <button
                            onClick={switchLanguage}
                            className="mt-4 text-[#FF7128] bg-white px-4 py-2 rounded-lg"
                        >
                            {language === "bn" ? "English" : "বাংলা"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
