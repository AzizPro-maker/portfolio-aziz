"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { profile } from "@/data/profile";
import { useTheme } from "next-themes";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // State untuk Theme dan Language
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("ID");

  // Mencegah hydration mismatch error untuk next-themes
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Monogram */}
        <a href="#hero" className="text-xl font-bold font-mono tracking-tighter text-slate-900 dark:text-white group flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center rounded-md group-hover:bg-indigo-400 transition-colors">
            {profile.avatarText}
          </div>
          <span>amar<span className="text-indigo-500">.dev</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="w-[1px] h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>

          {/* Toggle Language */}
          <button 
            onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
            className="w-10 h-8 flex items-center justify-center text-xs font-bold rounded-md border border-slate-300 dark:border-slate-700 bg-transparent text-slate-600 dark:text-slate-300 hover:text-indigo-500 hover:border-indigo-500 transition-all"
          >
            {lang}
          </button>

          {/* Toggle Theme */}
          {/* {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-transparent text-slate-600 dark:text-slate-300 hover:text-indigo-500 hover:border-indigo-500 transition-all"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )} */}

          <a 
            href={profile.resumeUrl}
            className="ml-2 px-4 py-2 text-sm font-medium text-indigo-500 border border-indigo-500/50 rounded-md hover:bg-indigo-500 hover:text-white transition-all"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 dark:text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}