"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, changeLanguage } = useLanguage();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="py-6 px-10 bg-[#F9D8D4] relative">
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
                        {language === "bn" ? "আমাদের লক্ষ্য " : "Our Goals"}
                    </Link>
                    <Link href="/contact" className="text-[#072E75] text-lg">
                        {language === "bn" ? "যোগাযোগ" : "Contact"}
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-x-4">
                    <Link href="#letter-section" passHref>
                        <button className="flex items-center gap-x-2 bg-[#FF7128] text-[#fff] px-4 py-2 rounded-lg">
                            <IoDocumentTextOutline className="text-xl" />
                            {language === "bn" ? "চিঠি পড়ুন" : "Read Letter"}
                        </button>
                    </Link>
                    <Link href="/ambassador/become-ambassador" passHref>
                        <button className="flex items-center gap-x-2 border-[#FF7128] border-[2px] text-[#FF7128] px-4 py-2 rounded-lg">
                            {language === "bn" ? "অ্যাম্বাসেডর হোন" : "Become An Ambassador"}
                        </button>
                    </Link>
                    <button
                        onClick={() => changeLanguage(language === "en" ? "bn" : "en")}
                        className="text-[#FF7128] text-lg px-3 py-1 rounded-lg"
                    >
                        <span className={language === "en" ? "font-bold" : ""}>En/</span>
                        <span className={language === "bn" ? "font-bold" : ""}>Bn</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="relative z-50 text-black hover:text-gray-600 transition-colors"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} />}
                    </button>

                    {/* Mobile Menu Overlay */}
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40" onClick={toggleMenu} />

                            {/* Menu Content */}
                            <div className="fixed inset-0 flex flex-col items-center pt-20 z-40">
                                <div className="w-full max-w-sm space-y-6 text-center">
                                    <Link
                                        href="/about"
                                        className="block text-white text-lg hover:text-gray-200 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {language === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
                                    </Link>
                                    <Link
                                        href="/goals"
                                        className="block text-white text-lg hover:text-gray-200 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {language === "bn" ? "আমাদের লক্ষ্য " : "Our Goals"}
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block text-white text-lg hover:text-gray-200 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {language === "bn" ? "যোগাযোগ" : "Contact"}
                                    </Link>
                                    <Link
                                        href="/ambassador/become-ambassador"
                                        className="block text-white text-lg hover:text-gray-200 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {language === "bn" ? "অ্যাম্বাসেডর হোন" : "Become An Ambassador"}
                                    </Link>
                                    <button
                                        onClick={() => {
                                            changeLanguage(language === "en" ? "bn" : "en");
                                            setIsMenuOpen(false);
                                        }}
                                        className="mt-4 text-[#FF7128] bg-white px-6 py-2 rounded-lg text-lg hover:bg-gray-100 transition-colors"
                                    >
                                        {language === "bn" ? "English" : "বাংলা"}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;