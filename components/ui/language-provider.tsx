"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ID" | "EN";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ID");
  const [mounted, setMounted] = useState(false);

  // Menyimpan preferensi bahasa di local storage agar tidak reset saat direfresh
  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("portfolio_lang") as Language;
    if (storedLang) setLang(storedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "ID" ? "EN" : "ID";
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  // Mencegah hydration error
  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook agar komponen lain mudah mengambil bahasa
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};