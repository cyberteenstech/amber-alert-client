"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const menuRef = useRef(null); // For mobile menu
    const dropdownRef = useRef(null); // For dropdown menu

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


    return (
        <div className="py-6 px-10 bg-[#F9D8D4]">
            <div className="max-w-[1440px] flex items-center justify-between mx-auto">
                <Link href="/" className="flex items-center gap-x-2">
                    <Image
                        src="/amberalert.png"
                        alt="Logo"
                        width={50}
                        height={50} 
                    />

                </Link>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-x-4">
                    <Link href="/about" className="text-[#072E75] text-lg">আমাদের সম্পর্কে</Link>
                    <Link href="/goals" className="text-[#072E75] text-lg">আমাদের লক্ষ</Link>
                    <Link href="/contact" className="text-[#072E75] text-lg">যোগাযোগ</Link>
                </div>

                <div className="hidden md:block">
                    <Link href="#letter-section" passHref>
                        <button className="flex items-center gap-x-2 bg-[#FF7128] text-[#fff] px-4 py-2 rounded-lg">
                            <IoDocumentTextOutline className="text-xl" /> চিঠি পড়ুন
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
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex flex-col items-center space-y-6 pt-20 text-white md:hidden z-[1000]" ref={menuRef}>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>আমাদের সম্পর্কে</Link>
                        <Link href="/goals" onClick={() => setIsMenuOpen(false)}>আমাদের লক্ষ</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>যোগাযোগ</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;