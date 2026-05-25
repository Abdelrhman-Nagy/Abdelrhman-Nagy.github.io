"use client";

import { Project } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0); // Reset index when a new project is opened
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  const handleNext = () => {
    if (project) {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrev = () => {
    if (project) {
      setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md"
          />
          <motion.div
            layoutId={`card-${project.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="bg-zinc-50 dark:bg-[#0a0a0c] w-full max-w-6xl max-h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-y-auto pointer-events-auto shadow-2xl ring-1 ring-black/5 dark:ring-white/10 relative hide-scrollbar text-zinc-900 dark:text-white">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6 text-zinc-900 dark:text-white" />
              </button>

              <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5">
                  <motion.h2 
                    layoutId={`title-${project.id}`}
                    className="text-4xl md:text-5xl font-bold mb-6 font-display"
                  >
                    {project.title}
                  </motion.h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 text-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 bg-zinc-100/50 dark:bg-zinc-950/50 p-8 md:p-12 relative flex flex-col items-center justify-center min-h-[50vh]">
                  <div className="w-full max-w-[320px] relative group aspect-[1/2.1] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-black">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.images[currentIndex]}
                          alt={`${project.title} screenshot ${currentIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Navigation Buttons */}
                    {project.images.length > 1 && (
                      <>
                        <button 
                          onClick={handlePrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/60 dark:bg-black/60 text-zinc-900 dark:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/90 dark:hover:bg-black/90 hover:scale-110 active:scale-95 shadow-md"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={handleNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/60 dark:bg-black/60 text-zinc-900 dark:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/90 dark:hover:bg-black/90 hover:scale-110 active:scale-95 shadow-md"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Dot Indicators */}
                  {project.images.length > 1 && (
                    <div className="mt-8 flex gap-2 overflow-x-auto max-w-full pb-2 hide-scrollbar">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                              ? "w-8 bg-zinc-800 dark:bg-white" 
                              : "w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-white/20 dark:hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
