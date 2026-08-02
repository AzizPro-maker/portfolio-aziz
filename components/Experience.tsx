"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100"><span className="text-indigo-400 font-mono text-xl mr-2">02.</span> Pengalaman</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>

        <div className="space-y-12 pl-4 md:pl-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative md:flex gap-8 group">
              {/* Garis Timeline & Dot */}
              <div className="absolute -left-4 md:left-auto md:relative md:w-32 flex flex-col items-center">
                <div className="w-3 h-3 bg-slate-800 rounded-full border border-indigo-400 z-10 group-hover:bg-indigo-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all"></div>
                {index !== experiences.length - 1 && (
                  <div className="absolute top-3 bottom-[-3rem] w-[1px] bg-slate-800 md:bottom-[-4rem]"></div>
                )}
              </div>
              
              {/* Konten Experience */}
              <div className="flex-1 pb-4">
                <p className="font-mono text-indigo-400 text-sm mb-1">{exp.date}</p>
                <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                      <span className="text-indigo-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}