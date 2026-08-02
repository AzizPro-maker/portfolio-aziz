"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100"><span className="text-indigo-400 font-mono text-xl mr-2">03.</span> Keahlian Teknis</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#111827] border border-slate-800 p-6 rounded-xl hover:border-indigo-500/30 transition-colors shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-[#09090B] border border-slate-800 text-slate-300 text-sm font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}