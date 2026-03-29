"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ThemeToggle } from "../ui/ThemeToggle";
import { PortfolioData } from "@/data/portfolio";

// Dynamically import the PDF Download button to avoid SSR hydration issues
const DownloadPdfButton = dynamic(
  () => import("../pdf/DownloadPdfButton").then(mod => mod.DownloadPdfButton),
  { ssr: false }
);

export function Hero({ data }: { data: PortfolioData }) {
  const { name, title, tagline } = data.personalInfo;

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div className="absolute top-8 right-8 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
            HELLO, MY NAME IS
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">
            {name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-zinc-700 dark:text-zinc-300">
            {title}
          </h3>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            {tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <DownloadPdfButton data={data} />
        </motion.div>
      </div>
    </section>
  );
}
