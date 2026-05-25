"use client";

import { useState } from "react";
import { PortfolioData, Project } from "@/data/portfolio";
import { HeroSection } from "@/components/sections/HeroSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function PortfolioContent({ data }: { data: PortfolioData }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ThemeToggle />
      <HeroSection personalInfo={data.personalInfo} />
      <GallerySection projects={data.projects} onProjectSelect={setSelectedProject} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
