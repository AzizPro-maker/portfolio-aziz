import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center border-t border-slate-900 bg-[#09090B]">
      <div className="flex gap-6 mb-4 md:hidden">
        {/* Social Links for Mobile (hidden on desktop if you prefer side-bars, but let's show it here) */}
        <a href={profile.socials.github} className="text-slate-400 hover:text-indigo-400"><FaGithub size={20}/></a>
        <a href={profile.socials.linkedin} className="text-slate-400 hover:text-indigo-400"><FaLinkedin size={20}/></a>
        <a href={profile.socials.whatsapp} className="text-slate-400 hover:text-indigo-400"><FaWhatsapp size={20}/></a>
      </div>
      <p className="text-slate-500 font-mono text-xs text-center px-6">
        Designed & Built by {profile.name} <br className="md:hidden" />
        <span className="hidden md:inline"> | </span> 
        Built with Next.js 15, Tailwind & Framer Motion
      </p>
    </footer>
  );
}