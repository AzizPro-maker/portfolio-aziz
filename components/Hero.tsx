"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { profile } from "@/data/profile";


export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-20 overflow-hidden">
      
      {/* KIRI: Teks & CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 z-10"
      >
        {/* Minimalist Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-full shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Tersedia untuk peluang baru
        </div>

        {/* Nama Utama */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-100">
            {profile.name}
          </h1>
        </div>

        {/* Animasi Mengetik Role */}
        <div className="text-xl md:text-2xl font-semibold text-indigo-400 h-8 flex items-center gap-2">
          <TypeAnimation
            sequence={[
              profile.title,
              2000,
              profile.subTitle,
              2000,
              "Fresh Graduate IT Engineer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        {/* Deskripsi Singkat */}
        <p className="max-w-lg text-sm md:text-base text-slate-400 leading-relaxed font-light">
          {profile.description}
        </p>

        {/* Barisan Tombol Aksi (Minimalist Style) */}
        <div className="flex flex-wrap gap-4 pt-6">
          <a 
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-7 py-3 bg-slate-100 text-slate-900 hover:bg-white hover:scale-105 font-semibold rounded-lg transition-all duration-300 shadow-md"
          >
            <FaDownload className="text-sm" /> Download CV
          </a>
          
          <div className="flex gap-2">
            <a 
              href={profile.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-transparent border border-slate-700 rounded-lg text-slate-300 hover:text-indigo-400 hover:border-indigo-400/50 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={profile.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-transparent border border-slate-700 rounded-lg text-slate-300 hover:text-indigo-400 hover:border-indigo-400/50 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href={`mailto:${profile.socials.email}`}
              className="p-3 bg-transparent border border-slate-700 rounded-lg text-slate-300 hover:text-indigo-400 hover:border-indigo-400/50 transition-all duration-300"
              title="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* KANAN: Clean Avatar Style */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center items-center mt-16 md:mt-0 relative"
      >
        {/* Background Soft Blob */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>

        {/* Image Container with Elegant Ring */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-slate-800 p-2 bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-xl">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 border border-slate-800">
            <Image 
              src="/profile/newAvatar.jpeg" 
              alt={`Foto Profil ${profile.name}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}