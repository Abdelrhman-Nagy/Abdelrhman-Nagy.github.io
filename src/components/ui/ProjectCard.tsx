"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl glass-card flex flex-col h-[500px] sm:h-[600px] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-primary/90 transition-colors duration-500" />
      
      <div className="flex-1 w-full h-full relative p-6">
        {project.images.length > 0 && (
          <motion.div
            layoutId={`image-${project.id}-${0}`}
            className="w-full h-full relative"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-contain transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        )}
      </div>

      <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end h-auto">
        <motion.h3 
          layoutId={`title-${project.id}`}
          className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-white"
        >
          {project.title}
        </motion.h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 backdrop-blur-md text-zinc-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-zinc-400 text-sm line-clamp-2 mt-2"
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
