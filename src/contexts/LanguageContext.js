"use client";
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.cookie = `language=${lang}; path=/; max-age=31536000`; // Save to cookie
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
