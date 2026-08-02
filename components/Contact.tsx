"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-indigo-400 font-mono text-sm mb-4">06. Apa Selanjutnya?</p>
        <h2 className="text-4xl font-bold text-white mb-6">Mari Terhubung</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Meskipun saat ini saya terbuka untuk peluang baru, kotak masuk saya selalu terbuka. Apakah Anda memiliki pertanyaan, tawaran pekerjaan, atau sekadar ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!
        </p>
        <a 
          href={`mailto:${profile.socials.email}`}
          className="inline-block px-8 py-4 border border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400/10 transition-colors font-mono"
        >
          Kirim Pesan
        </a>
      </motion.div>
    </section>
  );
}