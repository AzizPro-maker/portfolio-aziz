"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-slate-100"><span className="text-indigo-400 font-mono text-xl mr-2">01.</span> Tentang Saya</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>
        
        <div className="text-slate-400 space-y-4 leading-relaxed text-lg">
          <p>
            Halo! Saya {profile.name}, seorang lulusan D3 Teknik Informatika dari Universitas Dian Nuswantoro. Saya memiliki ketertarikan mendalam pada bidang rekayasa perangkat lunak, khususnya dalam membangun arsitektur *backend* yang tangguh dan terukur.
          </p>
          <p>
            Pendekatan saya dalam memecahkan masalah adalah dengan merancang basis data yang efisien, mengembangkan API yang bersih, dan memastikan integrasi sistem berjalan mulus. Pengalaman magang saya di sektor korporat telah melatih saya untuk memetakan proses bisnis manual menjadi solusi digital yang otomatis.
          </p>
          <p>
            Saya selalu terbuka untuk mempelajari teknologi baru, beradaptasi dengan cepat, dan sangat menikmati kolaborasi dalam tim untuk mewujudkan produk digital yang berdampak nyata.
          </p>
        </div>
      </motion.div>
    </section>
  );
}