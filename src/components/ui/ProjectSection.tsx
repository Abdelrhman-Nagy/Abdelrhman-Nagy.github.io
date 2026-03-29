"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { ImageGrid } from "./ImageGrid";
import { Project } from "@/data/portfolio";

export function ProjectSection({ project, index }: { project: Project; index: number }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroImage = project.images[0];
  const gridImages = project.images.slice(1);

  return (
    <section className={`py-32 ${index % 2 === 0 ? "bg-white dark:bg-zinc-950" : "bg-zinc-50 dark:bg-zinc-900/40"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 space-y-16">
        
        {/* Header Area */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Hero Image */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.01 }}
            className="group relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(heroImage)}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-300 pointer-events-none" />
            <Image
              src={heroImage}
              alt={`${project.title} featured hero screenshot`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        )}

        {/* Screenshot Grid */}
        <div className="pt-8">
          <ImageGrid images={gridImages} projectTitle={project.title} onImageClick={setSelectedImage} />
        </div>

      </div>

      {/* Fullscreen Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.button
              className="absolute top-6 right-6 p-3 bg-zinc-800/80 rounded-full text-white hover:bg-zinc-700 transition-colors z-50 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={28} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[90vw] h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt={`${project.title} fullscreen view`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
