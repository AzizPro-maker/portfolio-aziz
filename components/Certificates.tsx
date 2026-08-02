"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificate";
import { FaAward } from "react-icons/fa";

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-slate-100"><span className="text-indigo-400 font-mono text-xl mr-2">05.</span> Sertifikasi</h2>
        <div className="h-[1px] bg-slate-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <motion.div 
            key={cert.id}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-[#09090B] border border-slate-800 rounded-xl flex gap-4 items-start"
          >
            <div className="text-indigo-500 mt-1">
              <FaAward size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-200">{cert.title}</h3>
              <p className="text-sm text-indigo-400 font-mono my-1">{cert.issuer}</p>
              <p className="text-xs text-slate-500">{cert.date}</p>
              <p className="text-xs text-slate-600 font-mono mt-2">{cert.credentialId}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}