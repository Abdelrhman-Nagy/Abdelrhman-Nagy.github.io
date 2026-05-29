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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          style={{ backgroundSize: "200% auto" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-display mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary dark:from-white dark:via-zinc-400 dark:to-white"
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-charcoal/70 dark:text-zinc-400 mb-8 max-w-2xl mx-auto text-balance"
        >
          {personalInfo.title}
        </motion.h2>
        
        <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto shadow-md"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Abdelrhman-Nagy-CV.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary/10 text-secondary hover:text-white dark:bg-secondary/20 dark:text-zinc-100 font-semibold rounded-full hover:bg-secondary transition-colors w-full sm:w-auto border border-secondary/20"
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
