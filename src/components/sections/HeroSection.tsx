"use client";

import { motion } from "framer-motion";
import { PersonalInfo } from "@/data/portfolio";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-display mb-6">
          {personalInfo.name}
        </h1>
        
        <h2 className="text-xl md:text-3xl font-medium text-zinc-400 mb-8 max-w-2xl mx-auto text-balance">
          {personalInfo.title}
        </h2>
        
        <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto shadow-md"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Abdelrhman-Nagy-CV.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-zinc-200/50 text-zinc-900 dark:bg-white/10 dark:text-white font-semibold rounded-full hover:bg-zinc-300/50 dark:hover:bg-white/20 backdrop-blur-md transition-colors w-full sm:w-auto border border-zinc-300 dark:border-white/5"
          >
            Download CV
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-zinc-600 dark:text-zinc-400 font-semibold rounded-full hover:text-black dark:hover:text-white transition-colors w-full sm:w-auto"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
