"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100"><span className="text-indigo-400 font-mono text-xl mr-2">04.</span> Proyek Unggulan</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden group hover:border-indigo-500/50 transition-all shadow-lg flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-slate-900 relative border-b border-slate-800 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-slate-600 font-mono">{`<NoPreview />`}</span>
                )}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto border-t border-slate-800 pt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                      <FaGithub size={18} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 text-sm transition-colors">
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}