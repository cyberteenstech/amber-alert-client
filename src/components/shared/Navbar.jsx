"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="py-6 px-10 bg-[#F9D8D4] relative">
      <div className="max-w-[1440px] flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/amberalert.png" alt="Logo" width={80} height={80} />
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
          {/* <Link href="/ambassador" className="text-[#072e75] text-lg">
            {language === "bn" ? "অ্যাম্বেসাডরস" : "Ambassadors"}
          </Link> */}
        </div>

        <div className="hidden md:flex items-center gap-x-4">
          <Link href="/cases/missing" passHref>
            <div className="relative mb-4 md:top-0">
              <span
                className="alarm-indicator !top-[-3px] !left-[-4px]"
                style={{ animationDelay: "0s" }}
              ></span>
              <button
                className="border-[2px] rounded px-4 py-2 border-[#FF7128] text-[#FF7128]"
                style={{ animationDelay: "0s" }}
              >
                {language === "bn" ? "নিখোঁজ শিশু" : "Missing Kids"}
              </button>
            </div>
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
            {isMenuOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiMenu size={24} />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              <div
                className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40"
                onClick={toggleMenu}
              />
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
                  {/* <Link
                    href="/ambassador"
                    className="block text-white text-lg hover:text-gray-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === "bn" ? "অ্যাম্বেসাডরস" : "Ambassadors"}
                  </Link> */}

                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="block text-white text-lg hover:text-gray-200 transition-colors flex w-full justify-center items-center"
                    >
                      {language === "bn" ? "কেইস" : "Cases"}
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="bg-white mt-2 rounded-lg">
                        {/* <Link
                                                    href="/cases/successful"
                                                    className="block px-4 py-2 text-[#072E75] hover:bg-gray-100"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {language === "bn" ? "সফল কেস" : "Amber Alert Successful Cases"}
                                                </Link> */}
                        <Link
                          href="/cases/missing"
                          className="block px-4 py-2 text-[#072E75] hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {language === "bn" ? "নিখোঁজ শিশু" : "Missing Kids"}
                        </Link>
                      </div>
                    )}
                  </div>
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
