"use client";

import { Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

interface GallerySectionProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export function GallerySection({ projects, onProjectSelect }: GallerySectionProps) {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">Selected Work</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">A collection of premium mobile experiences.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-max">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={index % 3 === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          >
            <ProjectCard
              project={project}
              onClick={() => onProjectSelect(project)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
